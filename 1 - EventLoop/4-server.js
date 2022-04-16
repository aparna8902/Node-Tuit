const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event.')
    res.end('Helloon')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000')   
})

// process stays alive because "listen" is asynchronous