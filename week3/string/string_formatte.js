#! string formatting 

/* literal
concatination
literal variable
padstar & pasend
tofixed


Method	Best for
Template literals `${}`	Everyday string building, embedding variables
+ concatenation	Simple, quick joins
padStart/padEnd	Aligning columns in console/log output
toFixed()	Rounding numbers for display
JSON.stringify()	Logging objects/API responses
Intl.NumberFormat	Currency, percentages, locale-aware formatting


*/
let shahid= "Automation test engieer"

console.log(`Hii i am ${shahid} : i have 3+ year of experience`)

console.log("my self shahid ansari , i am from playwright learing and : " + shahid + "target to get a good job in a better companay")



console.log("ID".padEnd(10) + "Status");
console.log(String(101).padStart(10) + "PASSED");

const testResult = { id: 101, status: "passed", duration: 320 };
console.log(JSON.stringify(testResult, null, 2));
// Pretty-printed with 2-space indent


const formatter = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 1 });
console.log(formatter.format(0.917)); // "91.7%"

const efficiency = 45.678;
console.log(`Improved by ${efficiency.toFixed(3)}%`);
// Output: Improved by 45.7%