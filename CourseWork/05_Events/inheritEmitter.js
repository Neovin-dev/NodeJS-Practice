import  {EventEmitter} from "events"
import * as util from "util";

const emitter = EventEmitter;
let data = 'datavalue';
function Greetings(){
    this.greeting = 'Hello World';
}

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