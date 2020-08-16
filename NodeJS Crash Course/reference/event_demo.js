const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter {}

//Init obj
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));

//Init Event
myEmitter.emit('event');
