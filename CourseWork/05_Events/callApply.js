const obj = {
    name: 'John Dee',
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

// this instatiate the function
obj.greet();

//  this does the same the "call" keyword but different as it passes in this what we want like here name here we pass an object name
obj.greet.call({name: "Jane Day"})
// there is only a difference of how you passs the data in call and apply in one you pass it comma seperated in other you pass it as array of params
obj.greet.apply({name: "James Dalai"})