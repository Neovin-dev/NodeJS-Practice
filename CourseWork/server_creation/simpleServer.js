import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('<html><head></head><body><h1>Entry Page</h1></body></html>');
    console.log("hello path entry point");
})

app.get('/hello', function(req, res){
    res.send('<html><head></head><body><h1>Hello World</h1></body></html>');
    console.log("hello path ran");
})

app.listen(3000);