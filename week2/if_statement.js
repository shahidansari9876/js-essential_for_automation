#! if statement from condiontional statements
/*
if condtion works on the basis of true or false. If the condition is true then the code inside the if block will be executed otherwise it will be skipped.
*/

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
 // here only the condtion will check the age is greater than or equal to 18 or not. 
 // if the condition is true then the code inside the if block will be executed otherwise it will be skipped.
 
 let color = "red";
if (color === "red")  console.log(">> ready to click on red button");

// here only the condtion will check the color is red or not. if true than execute otherwise it will be skipped.
// and here else condition is not present so if the condition is false then nothing will be executed.

let color1 = "blue";
if (color1 === "red") console.log(">> ready to click on red button"); // this condition is false so nothing will be executed because else condition is not present.

 
let num=-10
if (num >= 0) console.log("The number is positive.");
else console.log("The number is negative."); // here the condition is false so the code inside the else block will be executed.
