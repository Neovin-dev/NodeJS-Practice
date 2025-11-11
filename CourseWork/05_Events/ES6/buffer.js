const buffer = new ArrayBuffer(8);

let view = new Int32Array(buffer); // we can store two nos as 32 bits we are using 32 bits to store 1 number and we have 8*8 bits therefore 2
view[0] = 5;
view[1] = 15;
view[2] = 30 // this isnt there
// console.log(buffer);
console.log(view);