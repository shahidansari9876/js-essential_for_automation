#! string comparison

const actual = "PASSED";
const expected = "PASSED";

console.log(actual === expected); // true (strict — recommended)
console.log(actual == expected);  // true (loose — avoid, allows type coercion) 




console.log("apple".localeCompare("banana")); // -1 (apple comes first)
console.log("banana".localeCompare("apple")); // 1
console.log("apple".localeCompare("apple"));  // 0 (equal)

const a = "Passed";
const b = "PASSED";
console.log(a.toLowerCase() === b.toLowerCase()); // true


const actualText = "  Test Passed  ";
const expectedText = "Test Passed";
console.log(actualText.trim() === expectedText); // true


console.log("TC_101_Login".startsWith("TC_")); // true
console.log("screenshot_final.png".endsWith(".png")); // true

const testId = "TC_1023";
console.log(/^TC_\d+$/.test(testId)); // true

const logLine = "Test case 101 completed with status PASSED";
console.log(logLine.includes("PASSED")); // true