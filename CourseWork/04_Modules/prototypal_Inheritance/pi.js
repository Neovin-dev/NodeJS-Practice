// prototypal inheritance: we access this using "." operator 

// every object has a property that points to another object that is the prototype of that object. there is also have a concept of prototype chain

// read about chaining and also we can add things to prototype which is always attached to another 

const Person = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}   

Person.prototype.greet = function() {
    console.log('Hello', this.firstname + ' ' + this.lastname, "hallooo");
}

var john = new Person('John', 'Doe')
john.greet()
console.log(john.__proto__)