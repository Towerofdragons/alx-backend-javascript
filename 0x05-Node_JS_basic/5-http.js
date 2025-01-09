const http = require('http');
const countStudents = require('./3-read_file_async')
const path = process.argv[2];

if (!path){
    ReadableStreamDefaultController;
}

const app = http.createServer((request, response) =>{
    if (request.url === '/students'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write("This is the list of our students\n");
        countStudents(path)
        .then((output) => {
            response.write(output);
            response.end();
        })
        .catch((error) => {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end(error.message);
        })
    };
    if (request.url === '/'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('Hello Holberton School!');
        response.end();
    }
}).listen(1245);

module.exports = app;