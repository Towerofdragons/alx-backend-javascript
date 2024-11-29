const http = require('http');
const countStudents = require('./3-read_file_async')
const path = process.argv[2];

if (!path){
    ReadableStreamDefaultController;
}

const app = http.createServer(function(request, response){
    if (request.url === '/students'){
        response.write("This is the list of our students\n");
        countStudents(path)
        .then((output) => {
            response.write(output);
            response.end();
        })
    };
    if (request.url === '/'){
        response.write('Hello Holberton School!');
        response.end();
    }
}).listen(1245);

module.exports = app;