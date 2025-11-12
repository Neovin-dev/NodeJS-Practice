import 'dotenv/config'
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
//  Process is a global object
const port = process.env.PORT || 3000;
// console.log(port);

// this will handle all the static loads for us as we dont want to do those manueally we would want if the response call for that sheet or script it gets loaded so we put that in a public file and route it there and pick the file called or in use
// this is also a app.use('url/route', function())
app.use('/assets', express.static(__dirname + '/public'))

// the middleware sits in between request and response. and it takes three parameters request response as well as the next keyword to call the next middleware
app.use('/', (request,response,next)=> {
   console.log("Middleware triggered");
   next();
})
// this middleware runs first and then calls the coreseponding request function as the response 
// there is the idea of middlware chaining
//  app.http_method('url', function(req, res))

// both will fire seperately post or get depending on the verb.
// Routing params and responses
// href=assets/style.css this href will send a http request to the app use as assets and then look in public file and load it 
// all these methods are middleware and express has a built in next() keyword to call the next middleware
app.get('/', (request, response) => {
   response.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello World!!!</h1></body></html>')
   console.log("get method ran for /")
});

app.get('/api', function(request, response){
   // not json but a object literal syntax
   response.json({ firstname: 'John', lastname: 'Doe' });
   console.log("get method ran for /api")
})

// variable -> :id
app.get('/person/:id', function(req, res){
   res.send('<html><head></head><body><h1>Person:' + req.params.id + '</h1></body></html>')
   console.log("get method ran for /person/dyamicid")
})
app.post('/', (request, response) => {
   response.send('Hello World!')
});

app.listen(port);