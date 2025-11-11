var firstname = "Jane";

(function (){
    var firstname = "John";
    console.log(firstname);
}());

console.log(firstname);
// by using outer () we are saying now it is an expression so we can invole it after } directly so it is a Involed function expression and it will run immediately it is one time expression execution so wont conflict with outter variable as block scoped

