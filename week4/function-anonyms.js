// Anonymous Functions in JavaScript (JS Essential for Automation)

/* 
An anonymous function is a function without a name.
It can be assigned to a variable, passed as a callback argument,
used with rest parameters, or executed immediately (IIFE).

Key Concepts Covered:
1. Standard Anonymous Function Expression & Named Function Expression
2. Anonymous Function with Rest Parameters (...args)
3. Anonymous Function with Default Parameters
4. Anonymous Functions as Callbacks (e.g. forEach, filter, map)
5. Immediately Invoked Function Expression (IIFE)
6. Arrow Functions as Modern Anonymous Functions
7. Anonymous Functions inside a JavaScript Class
8. Practical Automation Examples and Test Outputs
*/

// ==========================================
// 1. Existing Examples: Anonymous vs Named Function Expressions
// ==========================================

// Named Function Expression: 'sumOf' is only accessible inside its own body (useful for recursion / debugging)
let sum = function sumOf(num1, num2) {
    return (num1 + num2);
};

// console.log(sumOf(2, 2)); // ReferenceError: sumOf is not defined in outer scope
console.log("1. Sum using function expression:", sum(2, 2)); // Output: 4

// Standard Anonymous Function Expression (no function name after 'function' keyword)
let functionOfMultiple = function(num3, num4) {
    return (num3 * num4);
};

console.log("1. Multiplication:", functionOfMultiple(4, 4)); // Output: 16


// ==========================================
// 2. Anonymous Function with Rest Parameters (...args)
// ==========================================
// The rest operator (...args) bundles any number of arguments into an array.

const calculateTotalScore = function(...scores) {
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total;
};

console.log("\n2. Total of 3 numbers (Rest params):", calculateTotalScore(10, 20, 30)); // 60
console.log("2. Total of 5 numbers (Rest params):", calculateTotalScore(5, 15, 25, 35, 45)); // 125

// Practical Automation Example: Dynamic test step logger with rest parameters
const logTestSteps = function(testName, ...steps) {
    console.log(`\n--- Test Case: ${testName} ---`);
    steps.forEach(function(step, index) {
        console.log(`Step ${index + 1}: ${step}`);
    });
};

logTestSteps("Verify User Login", "Navigate to URL", "Enter Username & Password", "Click Login Button", "Assert Dashboard Visible");


// ==========================================
// 3. Anonymous Function with Default Parameters
// ==========================================

const configureEnvironment = function(env = "QA", timeout = 5000) {
    return `Configured for [${env}] environment with [${timeout}ms] timeout.`;
};

console.log("\n3. Default parameters:", configureEnvironment());
console.log("3. Custom parameters:", configureEnvironment("Staging", 10000));


// ==========================================
// 4. Anonymous Functions as Callbacks (Common in Test Automation)
// ==========================================

const testCases = [
    { id: "TC_01", title: "Login Test", status: "PASS", duration: 120 },
    { id: "TC_02", title: "Search Product", status: "FAIL", duration: 310 },
    { id: "TC_03", title: "Add to Cart", status: "PASS", duration: 95 },
    { id: "TC_04", title: "Checkout", status: "FAIL", duration: 450 }
];

// Passing anonymous function into Array.filter()
const failedTests = testCases.filter(function(test) {
    return test.status === "FAIL";
});
console.log("\n4. Failed Tests:", failedTests);

// Passing anonymous function into Array.map()
const testTitles = testCases.map(function(test) {
    return test.title;
});
console.log("4. Test Titles:", testTitles);


// ==========================================
// 5. Immediately Invoked Function Expression (IIFE)
// ==========================================
// An anonymous function executed immediately upon definition.

(function() {
    let framework = "Playwright Automation";
    console.log(`\n5. IIFE Executed: Initializing ${framework}...`);
})();

// IIFE with Rest Parameters
(function(...supportedBrowsers) {
    console.log("5. IIFE with rest parameters:", supportedBrowsers.join(", "));
})("Chromium", "Firefox", "WebKit");


// ==========================================
// 6. Arrow Functions (Modern Anonymous Functions)
// ==========================================
// Arrow functions are always anonymous in JavaScript.

const validateStatusCode = (actualCode, expectedCode) => actualCode === expectedCode;
console.log("\n6. Arrow function assertion (PASS):", validateStatusCode(200, 200)); // true
console.log("6. Arrow function assertion (FAIL):", validateStatusCode(500, 200)); // false

// Arrow function with rest parameters
const sumAll = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log("6. Arrow function with rest:", sumAll(10, 20, 30, 40)); // 100


// ==========================================
// 7. Anonymous Functions inside a JavaScript Class
// ==========================================
// Demonstrates using anonymous functions and rest parameters in ES6 Class methods

class TestSuiteRunner {
    constructor(suiteName) {
        this.suiteName = suiteName;
    }

    // Class property holding an anonymous function
    displaySuite = function() {
        console.log(`\n=== Running Suite: ${this.suiteName} ===`);
    };

    // Anonymous function inside class using rest parameters
    evaluateResults = function(...results) {
        let passed = 0;
        let failed = 0;
        results.forEach(function(res) {
            if (res.toLowerCase() === "pass") {
                passed++;
            } else {
                failed++;
            }
        });
        return {
            total: results.length,
            passed: passed,
            failed: failed
        };
    };
}

// Testing the class implementation
const runner = new TestSuiteRunner("Regression Suite");
runner.displaySuite();
const testSummary = runner.evaluateResults("PASS", "PASS", "FAIL", "PASS", "FAIL");
console.log("7. Class test execution summary:", testSummary);