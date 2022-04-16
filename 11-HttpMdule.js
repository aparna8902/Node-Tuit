const http = require('http');

//req incoming
const server =  http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page!')
    }
    else if(req.url === '/about'){
        res.end('Here is a lil something about us!')
    }
    else{
        res.end(`<h1>Ooops!</h1>
    <p>We can't find the page you are looking for T_T </p>
    <a href="/"> Home Page </a>`)
    }
})
server.listen(5000) //what port our server listens to


//npm -> node package manager
// 1. Reuse our own code in other projects
// 2. Use code written by other developers
// 3. Share our code with other developers
// package = dependency = module

//npm - global command comes with node 
// local dependency - use it only in this particular project
// npm i <packageName> 

// global dependency - use it in any project
//npm install -g <packageName>


//package.json - manifest file that stores important information about project/package
// package.json has a very important property - "dependencies"
// manual approach - (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// node_modules, a folder created by npm, contains the dependencies 
// example: lodash(a dependency)