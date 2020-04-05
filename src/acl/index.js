import {Role} from './Role'
import {check} from "./Check";

export let currentRoles = {};

let createRole = function (user) {
    user = user.toLowerCase();
    currentRoles[user] = new Role(user);
    return currentRoles[user];
};
let deleteRole = function (user) {
    user = user.toLowerCase();
    if(currentRoles.hasOwnProperty(user)){
        delete currentRoles[user]
    }
};

let specifyRole = function (user) {
    user = user.toLowerCase();
    if(currentRoles.hasOwnProperty(user)){
        return currentRoles[user];
    } else{
        //TODO
    }
};
let a = specifyRole;
let an = specifyRole;


export {createRole, a, an, check, deleteRole}; // a list of exported variables
