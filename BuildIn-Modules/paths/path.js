import path from 'node:path'
import fs from 'node:fs'

const notes = 'C:/Users/Lenovo/OneDrive/Documents/NodeJS Practice/BuildIn-Modules/fs/notes.txt';

const dir = path.dirname(notes);
const base = path.basename(notes);
const ext = path.extname(notes);
const base2 = path.basename(notes, path.extname(notes));
console.log(`path.dirname = ${dir} path.basename = ${base} path.extname = ${ext} path.extname2 ${base2}`)

// adding paths dynamically 

const name = 'joe';
var pathname = path.join('/', 'users', name, 'notes.txt');
// first parameter is the '/' seperator

console.log(pathname);

path.resolve('joe.txt')