#! for loop
/*
  This is a simple example of a for loop in JavaScript.
  It will print numbers from 1 to 5 in the console.
*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
    if (i === 3) {
        console.log("Three is a special number!");     break; // This will exit the loop after the first iteration

    }


}   


// take number from arrray and sum

let arr = ["shahid", 10, 'ansari', 20, "pinki", 30]
let num = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        console.log(arr[i]);
    }
    if (typeof arr[i] === 'string') {
        console.log(arr[i]);
    }   
}

for(let i = 0 ; i< arr.length;i++){

    console.log(typeof arr[i] + " " + arr[i] + " " + i);
    if(typeof arr[i] === 'number'){
        num+= arr[i];
    }
    console.log(arr[i].length);
}

console.log(`Total sum of numbers in the array is: ${num}`);

