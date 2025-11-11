import * as util from "util";

function Person(){
    this.firstname = 'John';
    this.lastname = "Doe";
}

Person.prototype.greet = function(){
    console.log('Hello' + this.firstname + ' ' + this.lastname);
}

function Policeman(){
    //  without this line it will go undefined this ran the person function so not these two properteies of Person firstname and lastname are associated with the 
    Person.call(this)
    this.badgenumber = '1234';
}

// Policeman inherits from Person
util.inherits(Policeman, Person);

let officer = new Policeman();
officer.greet();