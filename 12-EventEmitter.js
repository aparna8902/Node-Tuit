const EventEmitter = require('events') //EventEmitter is a class 

const customEmitter = new EventEmitter() // creating the instance of our class ie object

customEmitter.on('response',(name,id) => {
    console.log(`data recieved ${name} with id: ${id}`)
})
customEmitter.on('response',() => {
    console.log(`some other logic`)
}) // we can have multiple "on" functions for the same event

customEmitter.emit('response','Jakeee',007)

// for the "on" method we pass the event as well as the callback function
/* If the "emit" function is placed above the "on" function,
 we'll not see any consolelog. The order MATTERS */