// Return statements inside a JavaScript class

/*
 * Return statement examples:
 * 1. Return a single primitive value
 * 2. Return an expression that evaluates to a value
 * 3. Return an object
 * 4. Return a function itself
 * 5. Return a statement from a conditional statement
 */

class ReturnExamples {
    // 1. Return a single primitive value
    getStatus() {
        return "PASS"
    }

    // 2. Return an expression that evaluates to a value
    addNumbers(firstNumber, secondNumber) {
        return firstNumber + secondNumber
    }

    // 3. Return an object
    getTestResult(testName, status) {
        return {
            testName: testName,
            status: status
        }
    }

    // 4. Return a function itself
    getGreetingFunction() {
        return function (userName) {
            return `Hello, ${userName}!`
        }
    }

    // 5. Return a statement from a conditional statement
    validateStatusCode(statusCode) {
        if (statusCode >= 200 && statusCode < 300) {
            return `Status code ${statusCode}:`
        }

        return `Request failed  ${statusCode}: `
    }
}

const examples = new ReturnExamples()

console.log("1. Primitive value:", examples.getStatus())
console.log("2. Expression result:", examples.addNumbers(10, 5))
console.log("3. Object:", examples.getTestResult("Login test", "PASS"))

const greeting = examples.getGreetingFunction()
console.log("4. Function result:", greeting("Shahid"))

console.log("5. Conditional result:", examples.validateStatusCode(200))
console.log("5. Conditional result:", examples.validateStatusCode(404))



// return call back funciton need to set the output by call function
function shahidcallfunction(firstNumber,secondNumber){

    return function(){
        return firstNumber+secondNumber
    }
}

console.log(shahidcallfunction(1,2)())


function checkMethod(methodCode){
    if(methodCode >100){
        return `Method code above than 100: ${methodCode}`
    }
    else{
        return `Method code less than 100: ${methodCode}`
    }
}

console.log(checkMethod(1000))
console.log(checkMethod(88))