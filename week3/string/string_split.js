#! string split that split the string into two different array, 

/* array differetiate into array as one split than other 
that mean devide into the two different array*/

let str= "shahid ansari"

console.log(str.split("shahid"))

console.log(str.split("ansari"))

console.log(str.split(" "))

// ========================================================
// ADVANCED EXAMPLES & PRACTICE QUESTIONS
// ========================================================

// --- Case 1: Splitting by Character vs Splitting by Word ---
// Passing an empty string "" splits the string into individual characters.
// Passing a space " " splits the string into individual words.
let message = "Hello"
console.log(message.split(""))  // [ 'H', 'e', 'l', 'l', 'o' ]
console.log(message.split(" ")) // [ 'Hello' ] (No space found, returns full string in array)


// --- Case 2: Using the Limit Parameter ---
// split(separator, limit) splits the string and returns an array with up to the specified 'limit' of items.
let fruitsList = "apple,banana,orange,grape,mango"
console.log(fruitsList.split(",", 3)) // [ 'apple', 'banana', 'orange' ] (Only the first 3 items)


// --- Case 3: Splitting with No Matches ---
// If the separator is not found in the string, it returns an array containing the original string intact.
let name = "Shahid"
console.log(name.split("-")) // [ 'Shahid' ]


// ========================================================
// PRACTICE QUESTIONS (Try to solve these!)
// ========================================================

/*
Question 1:
Given the string: "JavaScript is awesome for automation testing"
Split this string into an array of words.
*/
let q1Str = "JavaScript is awesome for automation testing"
// Write your code here:
console.log(q1Str.split(" "))


/*
Question 2:
Given a filename string: "test_report.html"
Split the string by "." and find the file extension (the last element).
*/
let q2Str = "test_report.html"
// Write your code here:
let parts = q2Str.split(".")
console.log(parts[parts.length - 1]) // or parts[1]


/*
Question 3:
Given a comma-separated email list: "user1@test.com,user2@test.com,user3@test.com,user4@test.com"
Split the string to get only the first two email addresses in an array.
*/
let q3Str = "user1@test.com,user2@test.com,user3@test.com,user4@test.com"
// Write your code here:
console.log(q3Str.split(",", 2))


/*
Question 4:
Given the string: "W-E-L-C-O-M-E"
Split the string by hyphens ("-") and join them back to make a single word without hyphens.
(Hint: You can use split("-") and then join(""))
*/
let q4Str = "W-E-L-C-O-M-E"
// Write your code here:
console.log(q4Str.split("-").join(""))