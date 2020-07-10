const http = require('http');
const debug = require('debug')('test:app')
const server = http.createServer((request, response) => {
    debug('started')
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
