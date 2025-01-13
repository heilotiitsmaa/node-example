import {EventEmitter} from 'events';

//eventemitter= sõndmuste vahendaja = hea et luua reaalajas rakendusi

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' + name);
}

function byeHandler(name) {
    console.log('Bye ' + name);
}

//Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('bye', byeHandler);

//Emit events
myEmitter.emit('greet', 'Jaan');
myEmitter.emit('bye', 'Juhan');

//Error handling
myEmitter.on('VIGA', (err) => {
    console.log('Veateade: ' + err.message);
});

//Simulate error
myEmitter.emit('VIGA', new Error('Midagi läks nihu'));