//  we will build a event emitter and the event emitter is faking it as a real event this will help us go in more depth.

function Emitter(){
    this.events = {};
}
//  event listner that listen for an event to occur and respond to it.
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.event[type] || [];
    this.events[type].push(listener);
}