const EventEmitter = require('events')
const emitter = new EventEmitter();

//Listen the event
emitter.on('messageLogged', function(arg){
    console.log("Listener was called", arg.msg);
})

emitter.on('messageLogged', function(){
    console.log("Listener 2 was called")
})

//Raise an event
emitter.emit('messageLogged', {msg: "This is from event"});
