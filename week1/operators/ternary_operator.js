#! ternary operator, 
/* 
first case statement ? expression1 : expression2
second case statement ? expression1 (giving true) : second case statement ? expression1 (giving true) : expression2

If the statement evaluates to true, expression1 is executed. 
If the statement evaluates to false, expression2 is executed.
*/
let age = 20;
let isAdult = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(isAdult); // Output: You are an adult.

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log(`Your grade is: ${grade}`); // Output: Your grade is: B

let asume= "automation testing"
let result= asume=="automation testing" ? "You are in the right place." : asume=="manual testing" ? "You are in the wrong place." : "You are not in the right place.";
console.log(` given result for check your course type: ${result}`); // Output: You are in the right place.
