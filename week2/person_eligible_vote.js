#! checking peson eligible to vote or not 

/* checking peson eligible to vote or not
Syntax:
if (condition1) {
  // code to be executed if condition1 is true
  if (condition2) {
    // code to be executed if condition2 is true
  }
}
*/

// let age = 20;
// let isCitizen = 'Indian';

// if (age >= 18) {
//     if (isCitizen=== 'Indian') {
//         console.log("You are eligible to vote.");
//     } else {
//         console.log("You must be an Indian citizen to vote.");
//     }   
// }
// else {
//     console.log("You are not old enough to vote.");
// }


let age= 19;

switch (age) {
    case 15:
        console.log(`"You are not old enough to vote ${age}."`);
        break;
    case 16 :
        console.log(`"You are not old enough to vote ${age}."`);
        break;
    case 17:
        console.log(`"You are not old enough to vote ${age}."`);
        break;
    case 18:
        console.log(`"You are eligible to vote ${age}."`);
        break;
    case 19:
        console.log(`"You are eligible to vote ${age}."`);
        break;
    case 20:
        console.log(`"You are eligible to vote ${age}."`);
        break;
    default:
        console.log("Invalid age.");    
}