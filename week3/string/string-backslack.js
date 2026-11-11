#! backslash in strings

/* backslash in string means some action done on string 

\b
\f
\n
\r
\t
\v
\'
\"
\\ 
*/

let str1 = "Hey shahid , it's me"
let str2 = "Hey shahid , it\'s me"
let str3 = "Hey shahid , it\b's me"
let str4 = "Hey shahid , it\f's me"
let str5 = "Hey shahid , it\n's me"
let str6 = "Hey shahid , it\r's me"
let str7 = "Hey shahid , it\t's me"
let str8 = "Hey shahid , it\v's me"
let str9 = "Hey shahid , it\'s me"
let str10 = "Hey shahid , it\"'s me"
let str11 = "Hey shahid , it\\'s me"

console.log("str1:", str1)
console.log("str2:", str2)
console.log("str3:", str3)
console.log("str4:", str4)
console.log("str5:", str5)
console.log("str6:", str6)
console.log("str7:", str7)
console.log("str8:", str8)
console.log("str9:", str9)
console.log("str10:", str10)
console.log("str11:", str11)

// ==========================================
// Additional Practical Examples of Escaping
// ==========================================

console.log("\n--- Practical Automation Examples ---");

// 1. Newline (\n) for formatting logs and multi-line console output
let logReport = "Test Execution Status:\n- Login: PASSED\n- Checkout: PASSED\n- Logout: FAILED";
console.log("logReport:\n" + logReport);

// 2. Tab (\t) for clean formatting in columns/tables
let tableHeader = "Username\tPassword\tExpected_Result";
let tableRow = "test_user\tpass123\tLogin Success";
console.log("\nTable Example:\n" + tableHeader + "\n" + tableRow);

// 3. Double Escaped Backslash (\\) for folder paths in Windows
let windowsPath = "C:\\AutomationProject\\src\\tests\\login.test.js";
console.log("\nWindows File Path Example:\n" + windowsPath);

// 4. Double Quotes Inside Double Quotes (\")
let quoteMsg = "The test tool reported: \"Element not found in 10000ms\"";
console.log("\nEscaped Double Quotes Example:\n" + quoteMsg);

// 5. Escaping a Backslash within a Regular Expression string
let regExpStr = "Pattern matching a digit and backslash: \\\\d\\\\";
console.log("\nRegExp Pattern Example:\n" + regExpStr);