function greet(callback){
    console.log('Hello');
    let data = {
        name: 'Jordan Peele'
    }
    callback(data);
}

greet(function(data) {
    console.log('The callback was invoked!')
    console.log(data)
})

greet(function(data) {
    console.log('The callback was invoked!')
    console.log(data.name)
})