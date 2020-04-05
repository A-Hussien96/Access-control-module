import {Role} from './Role'
import {check} from "./Check";

export let currentRoles = {};

let createRole = function (user) {
    user = user.trim();
    if(user){
        user = user.toLowerCase();
        currentRoles[user] = new Role(user);
        return currentRoles[user];
    } else {
        return new Role("");
    }

};
let deleteRole = function (user) {
    user = user.trim();
    user = user.toLowerCase();
    if(currentRoles.hasOwnProperty(user)){
        delete currentRoles[user]
    }
};

let specifyRole = function (user) {
    user = user.trim();
    user = user.toLowerCase();
    if(currentRoles.hasOwnProperty(user)){
        return currentRoles[user];
    } else{
        return new Role(user)
    }
};
let a = specifyRole;
let an = specifyRole;


export {createRole, a, an, check, deleteRole}; // a list of exported variables
