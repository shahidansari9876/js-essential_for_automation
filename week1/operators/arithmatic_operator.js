#! operators and its types

/*  arithmetic operators
1. + (addition)
2. - (subtraction)
3. * (multiplication)
4. / (division) // quotient
5. % (modulus)  // remainder
6. ** (exponentiation) // power
*/

let a= 10
let b= 5

console.log(`addition of a and b is ${a+b}`) // here console.log is used to print the addition of a and b
console.log(`subtraction of a and b is ${a-b}`) // here console.log is used to print the subtraction of a and b
console.log(`multiplication of a and b is ${a*b}`) // here console.log is used to print the multiplication of a and b
console.log(`division of a and b is ${a/b}`) // here console.log is used to print the division of a and b quotient
console.log(`modulus of a and b is ${a%b}`) // here console.log is used to print the modulus of a and remainder
console.log(`exponentiation of a and b is ${a**b}`) // here console.log is used to print the exponentiation of a and b


for(let i=0; i<10; i++){
    console.log(`value of i is ${i}`) // here console.log is used to print the value of i
}

for(let i=10;i>=0;i--){
    console.log(`value of i is ${i}`) // here console.log is used to print the value of i
}
 
let c=100
for(let i=1;i<=10;i++){
    // a=a+i  
    d=c+i
    console.log(`result with the sum of d and i itration loop ${d}`) // here console.log is used to print the value of a in loop
}

for(let i=1;i<=5;i++){
    e= a**i
    console.log(`result with the multiplication of e and i itration loop ${e}`) // this operator type used of exponential (means power of) in loop
}