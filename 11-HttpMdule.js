const http = require('http');

//req incoming
//callback function invoked everytime someone tries to access the server
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

// we don't upload node_modules into git cuz they are way too huge
/* if we have package.json already, the "npm install" will automatically install the dependencies
   in the node_modules folder since they are given in package.json */
// so npm and package.json are very important while sharing code

// nodemon -> automatically restarts so we don't have to give "node <filename>" everytime - dev dependency
/* Why dev dependency?
   when we push it heroku we'll use something serious like PM2 to restart our application
   So testing and other dependencies are used in dev dependencies - use it while creating
   the app but once it's in production then we just share the dependencies that actually
   the app is using and not the ones we used while we developed the app*/

// EVENT LOOP DEFINITION
/* The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that 
JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.*/
// javascript is single threaded

