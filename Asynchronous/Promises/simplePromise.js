// Promise is an object to representing eventual completion of failure of async operation
// each chain return a promise object.

function makeOrder(item, timeInMins){
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if(success){
                resolve(`Your ${item} is ready after ${timeInMins / 1000} seconds`)
            } else {
                reject(`Sorry we ran out of ${item}`)
            }
        }, timeInMins);
    }) 
}

const cakePromise = makeOrder("cake", 2000);

cakePromise
        .then((result) => {
            console.log("Result")
        })
        .catch((error) => {
            console.log("Error")
        })

console.log("Order placed waiting for the promise to settle...")