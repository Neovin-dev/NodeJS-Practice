// Object and object literals.

//  Everything is a kind of object here.
//  Primitive property, Object property or Function method

let person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log(`Hello, ${this.firstname} ${this.lastname}`)
    }
};

person.greet();