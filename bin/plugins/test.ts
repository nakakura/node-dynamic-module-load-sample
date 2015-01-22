/// <reference path = "../ModuleIf.ts"/>

export class Test implements ModuleIf{
    constructor(){}

    public execute(){
        console.log("Test execute");
    }
}

export function initialize(): ModuleIf{
    return new Test();
}

