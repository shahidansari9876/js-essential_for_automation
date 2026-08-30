#! replace and replace all 

/* replace is string method remove that matche value and replace with the given text
replace all, matcha all value and replace all string from the actual one*/


let str= "shahid ansari"

console.log(str.replace("ansari" , "ANSARI"))   

console.log(str.replace("shahid" , "SHAHID"))   

console.log(str.replaceAll("shahid", "Pinki kushwaha ansari"))

console.log(str.replace(/a/g, "A"))  ///a/g rplace all g into given string

// ========================================================
// ADVANCED EXAMPLES & PRACTICE QUESTIONS
// ========================================================

// --- Case 1: Case-Insensitive Replacement ---
// Using regex with 'i' flag to match regardless of uppercase or lowercase.
let greeting = "Hello World! hello everyone."
console.log(greeting.replace(/hello/i, "Hi")) // Replaces only the first "Hello" (case-insensitive) -> "Hi World! hello everyone."


// --- Case 2: replace() vs replaceAll() with Strings ---
// replace() with a string only replaces the FIRST occurrence.
// replaceAll() replaces ALL occurrences.
let sentence = "cats are nice. cats are playful. I love cats."
console.log(sentence.replace("cats", "dogs"))    // "dogs are nice. cats are playful. I love cats."
console.log(sentence.replaceAll("cats", "dogs")) // "dogs are nice. dogs are playful. I love dogs."


// --- Case 3: Using a callback/replacer function ---
// You can pass a function to dynamically determine the replacement.
let priceText = "The price is 10 dollars and 20 cents."
// Double all numbers in the string
let doublePrices = priceText.replace(/\d+/g, (match) => parseInt(match) * 2)
console.log(doublePrices) // "The price is 20 dollars and 40 cents."


// ========================================================
// PRACTICE QUESTIONS (Try to solve these!)
// ========================================================

/*
Question 1:
Given the string: "apple banana apple orange apple"
Replace only the FIRST "apple" with "strawberry".
*/
let q1Str = "apple banana apple orange apple"
// Write your code here:
// console.log(q1Str.replace("apple", "strawberry"))


/*
Question 2:
Given the string: "Learning Javascript is fun! javascript is powerful."
Replace all occurrences of "javascript" (case-insensitive) with "JS".
*/
let q2Str = "Learning Javascript is fun! javascript is powerful."
// Write your code here:
// console.log(q2Str.replace(/javascript/ig, "JS"))


/*
Question 3:
Given a phone number template: "999-999-9999"
Use replaceAll to replace all hyphens ("-") with empty spaces (" ").
*/
let q3Str = "999-999-9999"
// Write your code here:
// console.log(q3Str.replaceAll("-", " "))