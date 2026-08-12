#! if not conidiontal statement

/*  
if not condition works on the basis of true or false. If the condition is false then the code inside the if block will be executed otherwise it will be skipped.
*/

let age = 18;

if (!(age >= 18)) {
    console.log("You are not eligible to vote.");
}
 // here only the condtion will check the age is greater than or equal to 18 or not. 
 // if the condition is false then the code inside the if block will be executed otherwise it will be skipped.
 
 let color = "red";
if (!(color === "red"))  console.log(">> ready to click on red button");

// here only the condtion will check the color is red or not. if false than execute otherwise it will be skipped.
// and here else condition is not present so if the condition is true then nothing will be executed.

let color1 = "blue";
if (!(color1 === "red")) console.log(">> ready to click on red button"); // this condition is true so the code inside the if block will be executed because else condition is not present.

 
let num=-10
if (!(num >= 0)) console.log("The number is negative.");
else console.log("The number is positive."); // here the condition is true so the code inside the else block will be executed.  

let name  
if(!name)   throw console.error("Name is required");   // here the condition is true so the code inside the if block will be executed.