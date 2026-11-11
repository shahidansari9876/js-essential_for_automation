// Arrow Functions in JavaScript (JS Essential for Automation)

/*
================================================================================
Arrow Function Rules (from Lecture Screenshot)
================================================================================

I. What are the rules?
   a. No "function" keyword
   b. => is must and left and right of arrow is context-driven
   c. Arrow function can be called when it's assigned it to a variable
   d. No binding of this keyword
   e. Rules around syntax

--------------------------------------------------------------------------------
Syntax Rules Table:
--------------------------------------------------------------------------------
#  | Notations | Should present             | Can skip
---|-----------|----------------------------|-----------------------------------
1  | ()        | If zero or more param      | If single param
2  | =>        | Always present             | (Never skipped)
3  | {}        | More than one statement    | If single statement/expression
4  | return    | If more than one statement | If just single statement
================================================================================
*/

// let  print = () => console.log('shahid');
// console.log(print());

let reverseString1 = (str) => {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
};
console.log(reverseString1("shahidPinki"));
