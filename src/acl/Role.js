import {Verb} from "./Verb";

export class Role {
    constructor(name) {
        this.name = name;
        this.verbs = {'get': new Verb('get'),
            'post': new Verb('post'),
            'delete': new Verb('delete'),
            'patch': new Verb('patch'),
            'put': new Verb('put')}
    }
    addVerb (verb) {
        if(verb){
            verb = verb.trim().toLowerCase();
            if(this.verbs.hasOwnProperty(verb)){
                return this.verbs[verb];
            } else {
                return new Verb("")
            }
        }
        return new Verb("")
    }
    can = this.addVerb;
}