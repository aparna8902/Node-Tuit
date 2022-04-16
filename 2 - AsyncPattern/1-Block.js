const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Home Page')
    }
    else if(req.url === '/about'){
        // Blocking Code
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`i = ${i} and j = ${j}`)
            }
        }
        res.end('About Page')
    }
    else{
        res.end('404 Page Not Found')
    }
})

server.listen(5000,() => {
    console.log('Server is listening on port : 5000')
})

//The blocking code blocks multiple users trying to access the website
// When the about page is reloaded all the other pages also end up loading and
// get done only after the about page is reloaded for that user.
// So, we have to try to code it asynchronously