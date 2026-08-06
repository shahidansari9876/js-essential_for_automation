#! logical operators

/* logical operators
1. && (logical AND)
2. || (logical OR)
3. ! (logical NOT)
*/

let a= 10
let b= 5
let c= 15
let d="shahid"
console.log(`a is greater than b and a is less than c is ${a>b && a<c}`) // here console.log is used to print the logical AND of a, b and c
console.log(`a is greater than b or a is less than c is ${a>b || a<c}`) // here console.log is used to print the logical OR of a, b and c
console.log(`a is not equal to b is ${!(a==b)}`) // here console.log is used to print the logical NOT of a and b
console.log(`d is equal to "shahid" is ${d=="shahid"}`) // here console.log is used to print the logical AND of d and "shahid"
console.log(`d is not equal to "shahid" is ${!(d=="shahid")}`) // here console.log is used to print the logical NOT of d and "shahid"
