import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const readable = fs.createReadStream(__dirname + '/sample.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

const writable = fs.createWriteStream(__dirname + '/sampleCopy.txt');
// this has emitter as inherited
readable.on('data', function(chunk){
    //  if text file is less than buffer size then we will get it as a whole else we will get this in chunks
    console.log(chunk.length);
    writable.write(chunk);
});