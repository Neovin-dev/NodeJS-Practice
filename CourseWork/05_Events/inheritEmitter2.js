import  {EventEmitter} from "events"
import * as util from "util";

const emitter = EventEmitter;
let data = 'datavalue';

//  we are adding properties to the object directly rather than its prototype and that will not appear in the new object so it is a incomplete type of inheritance.
function Greetings(){
    // this emitter is kind of a super constructor.
    emitter.call(this);
    this.greeting = 'Hello World';
}

// this util. inherits establishes a prototype chain
util.inherits(Greetings, emitter);

Greetings.prototype.greet = function(dataVal){
    console.log(this.greeting + ' ' + dataVal);
    this.emit('greet', dataVal);
}

let greeter = new Greetings();


greeter.on('greet', function(data){
    console.log('Someone greeted!' + " " + data)
});


greeter.greet(data);