/* The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that 
JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.*/

const {readFile} =  require('fs')

console.log('started a first task')
//checking file path
readFile('./content/first.txt','utf8',(err, result) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed first task')
})
console.log('Starting next task')