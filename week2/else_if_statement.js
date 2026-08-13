#! else if statement 

/*
The else if statement is used to specify a new condition to test, if the first condition is false. It allows you to check multiple conditions in a sequence.
Syntax:
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition2 is true
} else {
  // code to be executed if both condition1 and condition2 are false
}
*/

let score = 90;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}       


let  str="Hello";

if (str === "Hello") {
  console.log("Greeting detected!");
} else if (str === "Goodbye") {
  console.log("Farewell detected!");
} else {
  console.log("Unknown greeting.");
}   