// In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property. Key are String anf Values can be anything.

// There are many ways to create a Object

// 1. object literal notation.
let empty = {};

let person = {
    firstname :'John',
    lastname :'Doe'
}

// Accessing Properties 
// 1. Dot Operator
person.firstname // ObjectName.PropertyName

console.log(person.firstname);

// 2. ArrayLike Notation best for properties having a space in betweem 
person['firstname'];

// for eg 
let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};

address['building no'];

// Modifying Values of a property 
// properties are mutable
person.firstName = 'Jane';

console.log(person);

// Adding a new property to an object
person.age = 25;

delete person.lastname;

