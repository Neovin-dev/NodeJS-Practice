'use strict';

// this is cleaner way to setup an object.
// the class concept in javascript is very different from Java or C++ it is just syntactic sugar for the interitance and prototype and the whole of class as a function. so dont try java concepts in javascript. in js its just prototypal inheritance. they are using the class concept as it kind of is similar to how it is done for prototypes and its chaining
class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // these methods are automatically placed at the prototype.
    greet() {
        console.log('Hello,' + this.firstname + ' ' + this.lastname);
    }
}

let john = new Person('John', 'Doe');
john.greet();