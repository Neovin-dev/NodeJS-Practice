import 'dotenv/config'
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const port = process.env.PORT || 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
// the middleware sits in between request and response. and it takes three parameters request response as well as the next keyword to call the next middleware
app.use('/', (request,response,next)=> {
   console.log("Middleware triggered");
   next();
})

app.get('/', (request, response) => {
   response.render('index')
   console.log("get method ran for /")
});

app.get('/api', function(request, response){
   // not json but a object literal syntax
   response.json({ firstname: 'John', lastname: 'Doe' });
   console.log("get method ran for /api")
})

// variable -> :id
// // query string and post parameters
// http://localhost:8080/person/Naveen?qstr=123 '?qstr=123' this is the query of name qstr which will call the QSTR otherwise simple id will execulte as a params
app.get('/person/:id', function(req, res){
   res.render('person', { ID: req.params.id, QSTR: req.query.qstr })
   console.log("get method ran for /person/with query or not")
})

// when this is post we need the HTTP Body for that we are using the parser
app.post('/person', urlencodedParser, function(req, res){
    res.send('Thankyou')
    console.log(req.body.firstname);
    console.log(req.body.lastname)
})

const jsonParser = bodyParser.json();

app.post('/personjson', jsonParser, function(req, res){
    res.send('Thankyou for the JSON data')
    console.log(req.body.firstname);
    console.log(req.body.lastname)
})

app.get('/person/:id/Age/:age', function(req, res){
   res.render('person', { ID: req.params.id, AGE: req.params.age })
   console.log("get method ran for /person/dyamicid")
})

app.post('/', (request, response) => {
   response.send('Hello World!');
});

app.listen(port);

