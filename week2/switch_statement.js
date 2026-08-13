#! switch statement contions

/* 
switch statement usualy in when the predefined value are known 
and then the variable compare to the values and perform inside that case block
Syntax:
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression doesn't match any case
}
*/

let name = "Alice";

switch (name) {
  case "Alice":
    console.log("Hello, Alice!");
    break;
  case "Bob":
    console.log("Hello, Bob!");
    break;
  default:
    console.log("Hello, stranger!");
}   

let browser = "Chrome";

switch (browser) {
  case "Chrome":
    console.log("You are using Google Chrome.");    
    break;
    case "Firefox": 
    console.log("You are using Mozilla Firefox.");
    break;
    case "Safari":
        console.log("You are using Safari.");
    break;
    default:
        console.log("Unknown browser.");
}