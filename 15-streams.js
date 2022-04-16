// Streams are used to read or write sequentially
// 1. Writable; 2. Readable; 3. Duplex; 4.Transform
// Streams extend "EventEmitter" class

const {createReadStream} =  require('fs')

const stream = createReadStream('./content/big.txt','utf8',
{ highWaterMark: 90000 })

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

stream.on('data', (result) => {
    console.log(result)
}) //event is "data"