import http from 'node:http';

http
    .createServer((request, response) => {
        request.on('error', err => {
        console.error(err);
        response.statusCode = 400;
        response.end();
        });
        response.on('error', err => {
        console.error(err);
        });
        if(request.method === 'POST' && request.url === '/echo'){
            request.pipe(response);
        } else {
            response.statusCode = 404;
            response.write('<html>');
            response.write('<body>');
            response.write('<h1 style="color:red;">Hello, World!</h1>');
            response.write('</body>');
            response.write('</html>');
            response.end();
        }
})
.listen(8000)