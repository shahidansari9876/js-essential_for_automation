#! nested if condition

/* nested if condition 
condition inside another condition
Syntax:
if (condition1) {
  // code to be executed if condition1 is true
  if (condition2) {
    // code to be executed if condition2 is true
  }
}
*/

let age = 25;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You are eligible to drive.");
  } else {
    console.log("You need a driver's license to drive.");
  }
} else {
  console.log("You are not old enough to drive.");
}   

let shahid= "pinki";

if (shahid === "pinki") {
  if (shahid.length > 5) {
    console.log("The name is longer than 5 characters.");
  } else {
    console.log("The name is 5 characters or shorter.");
  }
} else {
  console.log("The name is not 'pinki'.");
}   


let number = 10;
let isEven = number % 2 === 0;

if (number > 0) {
  if (isEven) {
    console.log("The number is positive and even.");
  } else {
    console.log("The number is positive but odd.");
  }
} else {
  console.log("The number is not positive.");
}       