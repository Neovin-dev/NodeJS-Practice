import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//  this readFileSync is sync so blocking code which will block the flow it will wait till the buffer is filled.
// this takes two parameters
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

// this readFile is async and has 3 parameters directory , encoding and then callback
// error first callback it takes error object as first params. if no error than null
const greet2 = fs.readFile(__dirname + '/greet.txt','ut8', function(error, data){
    if(error != null){
        console.log('error', error);
    }
    console.log(`Async ${data.toString()}`);
    //  this is a buffer os value is <Buffer 4d 61 75 6a 20 4d 61 73 74 69 20 6b 69 20 7a 69 6e 64 61 67 69 20 62 68 61 72 69 20 70 61 64 20 6a 61 61 74 69 20 68 61 69>
    // convert this toString()
});

console.log(greet2);
console.log("end of script !!!!")
