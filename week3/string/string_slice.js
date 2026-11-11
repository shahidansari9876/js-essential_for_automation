#! string slice method

/* string slice reduce the string from index by side */

let str = "shahid_ansari"

console.log(str.slice(2)) // remove only index 

console.log(str.slice(2,5)) // keep only the index between values

console.log(str.slice(-2))  //remoce from last of the lenght 
  

console.log(str.slice(0,6))

console.log(str.slice(-6, -2))

// ==========================================
// ADDITIONAL STRING SLICE METHOD CASES
// ==========================================

// Case 1: Extract from specific index to the end
console.log(str.slice(7)) // "ansari" (starts at index 7)

// Case 2: Mixing positive and negative indices
console.log(str.slice(2, -2)) // "ahid_ansa" (starts at index 2, stops 2 characters before the end)

// Case 3: Out-of-bounds or invalid index combinations
console.log(str.slice(4, 2)) // "" (returns empty string because start index > end index)
console.log(str.slice(0, 100)) // "shahid_ansari" (stops at the end of the string, does not error out)

// Case 4: Real-world practical usage (extracting domain name from email)
let email = "user@example.com"
let domainStart = email.indexOf("@") + 1
let domain = email.slice(domainStart)
console.log(domain) // "example.com"