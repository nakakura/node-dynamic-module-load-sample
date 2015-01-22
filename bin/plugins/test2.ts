/// <reference path = "../ModuleIf.ts"/>

export class Test2 implements ModuleIf{
    constructor(){}

    public execute(){
        console.log("Test2 execute");
    }
}

export function initialize(): ModuleIf{
    return new Test2();
}

