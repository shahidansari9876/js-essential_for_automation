#! reverse string

let str = "shahid ansari";
let reversedStr = "";
for (let i = str.length - 1; i>= 0; i--) {
    reversedStr += str[i];
}
console.log(`Original string: ${str}`);
console.log(`Reversed string: ${reversedStr}`); 

if (str === reversedStr) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}