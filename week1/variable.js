#! variable and it scope in javascript learing, and literals 

let a=10 // here a is variable and 10 is value of variable a and let is used to declare variable a
let b=20// here b is variable and 20 is value of variable b

let c=a+b //here c is variable and a+b is value of variable c
console.log(c) //here console.log is used to print the value of variable c

var d='hello' // here d is variable and 'hello' is value of variable d and var is used to declare variable d
var e='world' // here e is variable and 'world' is value of variable e

const f=30 // here f is variable and 30 is value of variable f and const is used to declare variable 

console.log(d+e) //here console.log is used to print the value of variable d and e
console.log(f) //here console.log is used to print the value of variable f



/** here we are going to discuss about variable scope in javascript
 * where var is function scope and let and const are block scope
 * var keep the value as global and let and const keep the value as local
 * like var run the code with identifier with just above declaration 
 * and let and const run the code with identifier with just below declaration or block lever declaration
 */
// lets take an example of variable scope
var x=100

if(true){
    var x=200 // here x is variable and 200 is value of variable x and var is used to declare variable x
    console.log("here var scope of if condtion is the value of x: ", x) //here console.log is used to print the value of variable x
}
console.log("here var scope outside of if condtion is the value of x: ", x) //here console.log is used to print the value of variable x   



//lets take an example let variable scope
let y=100

if(true){
    let y=200 // here y is variable and 200 is value of variable y and let is used to declare variable y
    console.log("here let scope of if condtion is the value of y: ", y) //here console.log is used to print the value of variable y
}
console.log("here let scope outside of if condtion is the value of y: ", y) //here console.log is used to print the value of variable y   


//lets take an example const variable scope
const z=100

if(true){
    const z=200 // here z is variable and 200 is value of variable z and const is used to declare variable z
    console.log("here const scope of if condtion is the value of z: ", z) //here console.log is used to print the value of variable z
}
console.log("here const scope outside of if condtion is the value of z: ", z) //here console.log is used to print the value of variable z   


//literals in js
let str='hello'  // here the literal is string and the value of str is 'hello' and let is used to declare variable str
let num=10 // here the literal is number and the value of num is 10 and let is used to declare variable num
let bool=true // here the literal is boolean and the value of bool is true and let is used to declare variable bool
let undef=undefined  // here the literal is undefined and the value of undef is undefined and let is used to declare variable undef
let nul=null  // here the literal is null and the value of nul is null and let is used to declare variable nul  

console.log("string literal: ", str)
console.log("number literal: ", num)
console.log("boolean literal: ", bool)
console.log("undefined literal: ", undef)
console.log("null literal: ", nul)
