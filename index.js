// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
// console.log(document.body.parentNode)
// console.log(document.getElementById ('description'))
// console.log(document.getElementsByClassName('.about'))

const name = 'Tanya';
let age = 10;

let a = 5;
let b = 10;
console.log("Result 1: " + (a + b));

 a = 5;
 b = 10;
const c = a + b;
console.log("Result 2 " +c);


// Bonus
var container = document.getElementsByClassName('.container')

// Functions
function sayHey () {
    console.log("Hey!")
}

function conversation(){
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}
conversation()    