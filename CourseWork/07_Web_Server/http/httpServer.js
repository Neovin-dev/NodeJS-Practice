import http from 'node:http'

http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n')
})
.listen(8000, '127.0.0.1')