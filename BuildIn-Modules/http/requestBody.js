import http from "node:http"

http.createServer((request,response) => {
    const {headers, methods, url } = request;
    let body = [] // body as an array

    request
        .on('data', function(chunkData) {
            return body.push(chunkData);
        })
        .on('data', chunk => {
            body.push(`chunk of code  ${chunk},  ${headers},  ${methods},  ${url},  ${request}.`);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            // 'body' has entire request stored as a string 
        })
        .on('error', (err) => {
            console.log(err.stack);
        })

    // always set header and status before write the body not syntactically but practice wise

    response.statusCode = 200;
    // response.setHeader('Content-Type', 'application/json'); if this was not in place it would have rendered as a html
    response.setHeader('Content-Type', 'html');
    // response.setHeader('Content-Type', 'application/json');

    response.write('<html>');
    response.write('<body style="background-color: grey">');
    response.write('<h1 style="color:red;">Hello, World!</h1>');
    response.write('<p style="color:white;">hello there this is the response from the node enviornment</p>');
    response.write('</body>');
    response.write('</html>');
    response.end();
})
.listen(8000);
