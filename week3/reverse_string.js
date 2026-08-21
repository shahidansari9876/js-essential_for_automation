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


function reverseAnything(name){
    let result=""
    if(typeof name === "string"){
        for(let i=name.length-1;i>=0;i--){
            result+=name[i]
        }
        return result;
    }
    if(typeof name==="number"){
        let numstr=name.toString()

        for(let i=numstr.length-1;i>=0;i--){
            
             result +=numstr[i]
        }
        return Number(result)
    }
}


console.log(reverseAnything(10000000))