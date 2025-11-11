//  Pipe: connecting two streams by writing to one stream what is being read from another stream
import fs from 'node:fs' 
import zlib from 'node:zlib'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readable = fs.createReadStream(__dirname + '/sample.txt');

const writable = fs.createWriteStream(__dirname + '/sampleCopy.txt');

const compressed = fs.createWriteStream(__dirname + '/sample.txt.gz'); // make a compressor

const gzip = zlib.createGzip(); // This will create a transform for duplex.

//  this listens for readable and then call writable
readable.pipe(writable)

readable.pipe(gzip).pipe(compressed);
// pipe(gzip) read and then pipe(compressed); write 
// we are able to do this as we can do chaining of this type on a duplex first it reads and then write. 