import http from 'node:http';
// Let's simplify the previous example to make a simple echo server, which just sends whatever data is received in the request right back in the response. All we need to do is grab the data from the request stream and write that data to the response stream, similar to what we did previously.
// createServer is just stream on simplified
http
    .createServer((request, response) => {
        let body = [];
        request
            .on('data', chunk => {
                body.push(chunk);
            })
            .on('end', () => {
                body = Buffer.concat(body).toString();
                response.end(body);
            })
    })
    .listen(8000)