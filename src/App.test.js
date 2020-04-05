import React from 'react';
import {createRole, a, an, check, deleteRole} from "./acl";

test('Check correct role addition, admin, guest', () => {
    createRole('user');
    a('user').can('get').from('/users');
    let checker = check.if('user').can('get').from('/users').isValid;
    expect(checker).toBe(true)
    deleteRole('user')
});

test('Check access prevention, admin, guest', () => {
    createRole('user');
    a('user').can('get').from('/users');
    let checker = check.if('user').can('post').to('/users').isValid;
    expect(checker).toBe(false)
    deleteRole('user');
});

test('Check Multiple user access 1', () => {
    createRole('admin');
    createRole('user');
    createRole('guest');

    an('admin').can('get').from('/users');
    an('admin').can('post').to('/users');
    a('guest').can('get').from('/articles');

    let checker = check.if('guest').can('post').to('/users').isValid;
    expect(checker).toBe(false)
});
test('Check Multiple user access 2', () => {
    let checker = check.if('admin').can('post').to('/users').isValid;
    expect(checker).toBe(true);
});

test('Conditional access 1', () => {
    a('user').can('post').to('/users/:userID/articles').when((params, user) => {
        return user.id === params.userID
    });
    let checker = check.if('user').can('post').to('/users/10/articles').when({id: "10"});
    expect(checker).toBe(true)
});

test('Conditional access 2', () => {
    a('user').can('post').to('/users/:userID/articles').when((params, user) => {
        return user.id === params.userID
    });
    let checker = check.if('user').can('post').to('/users/10/articles').when({id: "12"});
    expect(checker).toBe(false)
    deleteRole('user');
    deleteRole('admin');
    deleteRole('guest')
});

test('Test non existing role', () => {
    let checker = check.if('nonexisting').can('post').to('/users/10/articles').isValid;
    expect(checker).toBe(false)
});

test('Test non existing verb', () => {
    createRole('user');
    a('user').can('nonexisting').from('/users');
    let checker = check.if('user').can('nonexisting').from('/users').isValid;
    expect(checker).toBe(false)
});
