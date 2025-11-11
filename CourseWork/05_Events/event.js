//  we can access an object in two ways 

var obj = {
    greet: 'Hello'
}

// using dot operator but its kind of static as we can only select if present not have value change nad put after "."
console.log(obj.greet);

// this is dynamic as we change change the string and have it passed as string and access property
console.log(obj['greet'])

//  like this

var prop = 'greet';
console.log(obj[prop])

var arr = [];

arr.push(function(){
    console.log('Hello world 1')
})

arr.push(function(){
    console.log('Hello world 2')
})

arr.push(function(){
    console.log('Hello world 3')
})

arr.forEach(element => {
    element() // invoked all the functions
});