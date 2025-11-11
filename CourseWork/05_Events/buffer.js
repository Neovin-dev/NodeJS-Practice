// BUffer is such a fundamental concept in NodeJS that it doesnt require any kind of import or require.

const buf = Buffer.from('Hello', 'utf8') // utf8 is defualt

console.log(buf)
// <Buffer 48 65 6c 6c 6f>

console.log(buf.toString())
// Hello

console.log(buf.toJSON())
// { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }

console.log(buf[2])
//  will return the third value as 0 1 2 index

buf.write('wo');
console.log(buf.toString());
// this overwrite so can manipulate the original 