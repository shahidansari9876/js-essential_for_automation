#! comparison operators

/* comparison operators
1. == (equal to)
2. === (equal value and equal type)
3. != (not equal to)
4. !== (not equal value or not equal type)
5. > (greater than)
6. < (less than)
7. >= (greater than or equal to)
8. <= (less than or equal to)
*/

let a= 10
let b= 5
let c="10"

console.log(`a is equal to b is ${a==b}`) // here console.log is used to print the comparison of a and b
console.log(`a is not equal to b is ${a!=b}`) // here console.log is used to print the comparison of a and b
console.log(`a is greater than b is ${a>b}`) // here console.log is used to print the comparison of a and b
console.log(`a is less than b is ${a<b}`) // here console.log is used to print the comparison of a and b
console.log(`a is greater than or equal to b is ${a>=b}`) // here console.log is used to print the comparison of a and b
console.log(`a is less than or equal to b is ${a<=b}`) // here console.log is used to print the comparison of a and b
console.log(`a is strict equal value and equal type to c is ${a===c}`) // here console.log is used to print the comparison of a and c 
console.log(`a is not strict equal value or not strict equal type to c is ${a!==c}`) // here console.log is used to print the comparison of a and c 
console.log(`a is equal value to c is ${a==c}`) // here console.log is used to print the comparison of a and c  
