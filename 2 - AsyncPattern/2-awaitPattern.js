const {readFile, writeFile} = require('fs').promises
// const util = require('util')  //util module has a function called promisify
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start  = async () => {
    try{
        const first  = await readFile('./content/first.txt','utf8') //check the path
        const second = await readFile('./content/second.txt','utf8')
        await writeFile('./content/result-mind-grenade.txt',`this is coool! : ${first}, ${second}`)
        console.log(first, second)
    } catch(error){
        console.log(error)
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))

// readFile('./content/first.txt','utf8',(err, data) => {
//     if(err) {
//         console.log(err)
//         return
//     } else {
//         console.log(data)
//     }
// })


//A Promise in Node means an action which will either be completed or rejected.
// And unlike callbacks, promises can be chained.