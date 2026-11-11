#! function in javascript

/* function is a block of code that is used to perform a specific task. It can be defined once and called multiple times throughout the code.
functions can take parameters and return values. 

@scenario:
a function return the values
a fucntion can take parameters 
a function can be called multiple times
a function can be calling another function
any type of data can be passed as parameters to a functions
that is more or less in parameters

*
* @scenario
* 1. function that returns a value
* 2. function that does an action
* 3. Calling function
* 4. Any type of data can be provided and no type checking is done
* 5. More or less args can be provided and -
*    no check is performed on # number of parameter(s) Vs Number of args received
* 6. Function name and typeof Operator
*
*/

// 1. function that returns a value
function shahid(num1, num2){
    return num1+num2
}

console.log(shahid(4,16))
console.log(shahid())
console.log(shahid(4,4))
console.log(shahid("pinki", "shahid"))
console.log(shahid(4,44,44))
console.log(typeof shahid(16,20))
console.log(typeof shahid("shahid","pinki"))

// 2. function that does an action (no return value / returns undefined)
function printUserGreeting(userName) {
    console.log(`Hello, welcome to JavaScript Automation, ${userName}!`)
}
printUserGreeting("Shahid")
let result = printUserGreeting("Pinki")
console.log(`Return value of action function: ${result}`) // undefined

// 3. Calling a function & Function calling another function
function multiply(a, b) {
    return a * b
}

function calculateSquare(num) {
    return multiply(num, num) // calling another function
}

console.log(`Square of 5: ${calculateSquare(5)}`)

// 4. Any type of data can be provided as parameters (Objects, Arrays, Booleans)
function printDataDetails(data) {
    console.log(`Value:`, data, `| Type:`, typeof data)
}

printDataDetails(100)
printDataDetails("Automation Testing")
printDataDetails(true)
printDataDetails([10, 20, 30])
printDataDetails({ name: "Shahid", role: "QA Engineer" })

// 5. Handling default parameters and variable arguments (Rest Operator)
function login(username = "guest", password = "defaultPassword") {
    console.log(`Logging in with user: ${username} and pass: ${password}`)
}

login() // uses default parameters
login("admin", "admin123") // overrides defaults

// Using rest parameters (...args) for handling multiple arguments
function sumAllNumbers(...numbers) {
    let total = 0
    for (let num of numbers) {
        total += num
    }
    return total
}

console.log(`Sum of 2 numbers: ${sumAllNumbers(10, 20)}`)
console.log(`Sum of 5 numbers: ${sumAllNumbers(1, 2, 3, 4, 5)}`)

// 6. Function name and typeof Operator on the function itself
console.log(`Type of function itself:`, typeof shahid) // "function"
console.log(`Function name property:`, shahid.name) // "shahid"

// 7. Arrow Functions & Anonymous Functions (commonly used in automation callbacks)
const divide = (a, b) => a / b
console.log(`Divide 20 by 4: ${divide(20, 4)}`)

// 8. Practical Automation Example: Helper function for test status validation
function validateStatus(statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
        return "PASS: Request Successful"
    } else if (statusCode >= 400 && statusCode < 500) {
        return "FAIL: Client Error"
    } else {
        return "FAIL: Server Error or Unknown Status"
    }
}

console.log(validateStatus(200))    
console.log(validateStatus(404))
console.log(validateStatus(500))