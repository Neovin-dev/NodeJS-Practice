'use strict'

import EventEmitter from "events"

//  we are able to export the class as any other function as it is just class and that means this class concept is the syntatic sugar.

export default class Greetr extends EventEmitter {
    constructor(){
        super();
        this.greeting = "Hello World";
    }

    greet(data) {
        console.log(`${ this.greeting }: ${data}`);
        this.emit('greet', data);
    }
}


