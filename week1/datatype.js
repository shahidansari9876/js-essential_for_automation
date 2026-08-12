#! datatype learning for js essentials

//typeof operator in js is used to find the datatype of variable
let a=10 // here a is variable and 10 is value of variable a and let is used to declare variable a
let b='hello' // here b is variable and 'hello' is value of variable b and let is used to declare variable b
let c=true // here c is variable and true is value of variable c and let is used to declare variable c
let d=undefined // here d is variable and undefined is value of variable d and let is used to declare variable d
let e=null // here e is variable and null is value of variable e and let is used to declare variable e

console.log("datatype of a: ", typeof a) //here console.log is used to print the datatype of variable a
console.log("datatype of b: ", typeof b) //here console.log is used to print the datatype of variable b
console.log("datatype of c: ", typeof c) //here console.log is used to print the datatype of variable c
console.log("datatype of d: ", typeof d) //here console.log is used to print the datatype of variable d
console.log("datatype of e: ", typeof e) //here console.log is used to print the datatype of variable e
console.log("datatype of f: ", typeof ("shahid")) // here console.log is used to print the datatype of variable f

// datatypeforms in js essentials 

console.log("shahid ansari") // literals dataform 
let str='hello' // variable dataforms
console.log("string literal: ", str) 

console.log("shahid" + " ansari") // string concatenation dataforms , or expression dataforms

//truthy falsy type null, undefined, 0, false, NaN, '' are falsy values in js essentials   
/**
 * truthy and falysy values
 * ""
 * 0
 * undefined
 * null
 * false
 * NaN n  
 * 
 * all other values are truthy values   
 * ''
 * objects {}
 * arrays []
 * functions() {}
 */ 

let val= false
if(val){
    console.log(`val is truthy ${val}`) // here console.log is used to print the value of val if it is truthy
}
else{
    console.log(`val is falsy ${val}`) // here console.log is used to print the value of val if it is falsy
}


let val2= 5 + undefined
if(val2){
        console.log(`val2 is truthy ${val2}`) // here console.log is used to print the value of val2 if it is truthy
}
else{
    console.log(`val2 is falsy ${val2}`) // here console.log is used to print the value of val2 if it is falsy
}

let val3= 5 + null
if(val3){
        console.log(`val3 is truthy ${val3}`) // here console.log is used to print the value of val3 if it is truthy
}
else{
    console.log(`val3 is falsy ${val3}`) // here console.log is used to print the value of val3 if it is falsy
}   

let val4= null + undefined
if(val4){
        console.log(`val4 is truthy ${val4}`) // here console.log is used to print the value of val4 if it is truthy
}
else{
    console.log(`val4 is falsy ${val4}`) // here console.log is used to print the value of val4 if it is falsy
}

let val5= 0 + undefined
if(val5){
        console.log(`val5 is truthy ${val5}`) // here console.log is used to print the value of val5 if it is truthy
}
else{
    console.log(`val5 is falsy ${val5}`) // here console.log is used to print the value of val5 if it is falsy
}   

let val6= 0 + null
if(val6){
        console.log(`val6 is truthy ${val6}`) // here console.log is used to print the value of val6 if it is truthy
}
else{
    console.log(`val6 is falsy ${val6}`) // here console.log is used to print the value of val6 if it is falsy
}   

let val7= 0 + false
if(val7){
        console.log(`val7 is truthy ${val7}`) // here console.log is used to print the value of val7 if it is truthy
}
else{
    console.log(`val7 is falsy ${val7}`) // here console.log is used to print the value of val7 if it is falsy
}     

let val8= 0 + NaN
if(val8){
        console.log(`val8 is truthy ${val8}`) // here console.log is used to print the value of val8 if it is truthy
}
else{
    console.log(`val8 is falsy ${val8}`) // here console.log is used to print the value of val8 if it is falsy
}   

let val9= 0 + ''
if(val9){
        console.log(`val9 is truthy ${val9}`) // here console.log is used to print the value of val9 if it is truthy
}
else{
    console.log(`val9 is falsy ${val9}`) // here console.log is used to print the value of val9 if it is falsy
}   

let val10= 0 + 0
if(val10){
        console.log(`val10 is truthy ${val10}`) // here console.log is used to print the value of val10 if it is truthy
}
else{
    console.log(`val10 is falsy ${val10}`) // here console.log is used to print the value of val10 if it is falsy
}   

//  now lets only falsy values

let falsy1= 0
if(falsy1){
    console.log(`falsy1 is truthy ${falsy1}`) // here console.log is used to print the value of falsy1 if it is truthy
}
else{
    console.log(`falsy1 is falsy ${falsy1}`) // here console.log is used to print the value of falsy1 if it is falsy
}   

let falsy2= null
if(falsy2){
    console.log(`falsy2 is truthy ${falsy2}`) // here console.log is used to print the value of falsy2 if it is truthy
}
else{
    console.log(`falsy2 is falsy ${falsy2}`) // here console.log is used to print the value of falsy2 if it is falsy
}   

let falsy3= undefined
if(falsy3){
    console.log(`falsy3 is truthy ${falsy3}`) // here console.log is used to print the value of falsy3 if it is truthy
}
else{
    console.log(`falsy3 is falsy ${falsy3}`) // here console.log is used to print the value of falsy3 if it is falsy
}   

let falsy4= false
if(falsy4){
    console.log(`falsy4 is truthy ${falsy4}`) // here console.log is used to print the value of falsy4 if it is truthy
}
else{
    console.log(`falsy4 is falsy ${falsy4}`) // here console.log is used to print the value of falsy4 if it is falsy
}   

let falsy5= NaN
if(falsy5){
    console.log(`falsy5 is truthy ${falsy5}`) // here console.log is used to print the value of falsy5 if it is truthy
}
else{
    console.log(`falsy5 is falsy ${falsy5}`) // here console.log is used to print the value of falsy5 if it is falsy
}   

let falsy6= ''
if(falsy6){
    console.log(`falsy6 is truthy ${falsy6}`) // here console.log is used to print the value of falsy6 if it is truthy
}
else{
    console.log(`falsy6 is falsy ${falsy6}`) // here console.log is used to print the value of falsy6 if it is falsy
}       

//now takes only truthy values

let truthy1= 1
if(truthy1){
    console.log(`truthy1 is truthy ${truthy1}`) // here console.log is used to print the value of truthy1 if it is truthy
}
else{
    console.log(`truthy1 is falsy ${truthy1}`) // here console.log is used to print the value of truthy1 if it is falsy
}   

let truthy2= 'hello'
if(truthy2){
    console.log(`truthy2 is truthy ${truthy2}`) // here console.log is used to print the value of truthy2 if it is truthy
}
else{
    console.log(`truthy2 is falsy ${truthy2}`) // here console.log is used to print the value of truthy2 if it is falsy
}   

let truthy3= true
if(truthy3){
    console.log(`truthy3 is truthy ${truthy3}`) // here console.log is used to print the value of truthy3 if it is truthy
}
else{
    console.log(`truthy3 is falsy ${truthy3}`) // here console.log is used to print the value of truthy3 if it is falsy
}   

let truthy4= {}
if(truthy4){
    console.log(`truthy4 is truthy ${truthy4}`) // here console.log is used to print the value of truthy4 if it is truthy
}
else{
    console.log(`truthy4 is falsy ${truthy4}`) // here console.log is used to print the value of truthy4 if it is falsy
}   

let truthy5= []
if(truthy5){
    console.log(`truthy5 is truthy ${truthy5}`) // here console.log is used to print the value of truthy5 if it is truthy
}
else{
    console.log(`truthy5 is falsy ${truthy5}`) // here console.log is used to print the value of truthy5 if it is falsy
}   

let truthy6= function(){}
if(truthy6){
    console.log(`truthy6 is truthy ${truthy6}`) // here console.log is used to print the value of truthy6 if it is truthy
}
else{
    console.log(`truthy6 is falsy ${truthy6}`) // here console.log is used to print the value of truthy6 if it is falsy
}           

    