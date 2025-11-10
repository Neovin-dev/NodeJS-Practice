async function f(){ // when async it always returns a promise
    return 1;
}

function f1(){
    return 1;
}

async function f3() {
  return Promise.resolve(1);
}

// f().then(alert); // 1

console.log(f()); // Promise { 1 }
console.log(f1()); // 1
console.log(f3());

// you usually don't need to explicitly declare and return a new Promise inside an async function. The primary reason you would see a Promise declared inside an async function is to wrap a traditional callback-based or timer-based asynchronous operation that doesn't natively return a Promise, specifically to enable it to be used with the await keyword.

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();