import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200; // we set the statusCode property to 200, to indicate a successful response.
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World ${req} and ${res}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
