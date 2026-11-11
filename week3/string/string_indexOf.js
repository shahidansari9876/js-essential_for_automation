#! index of methos for string 

/* index of method gives the index of the valus inthe the given string
*/

let str = "shahid ansari"

console.log(str.indexOf("s"))
console.log(str.indexOf("a"))

console.log(str.lastIndexOf())

console.log(str.indexOf("s") + " " + str.lastIndexOf("s"))

let str2 = "App # {12345} submitted"
let start = str2.indexOf("{")
let end = str2.lastIndexOf("}")
console.log(end);
let appNum = str2.slice(start + 1, end)
console.log(appNum);

