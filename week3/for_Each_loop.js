#! for each loop 


let arr= ["shahid", 10, 'ansari', 20, "pinki", 30]

let num = 0;

arr.forEach((item, index) => {
    console.log(typeof item + " " + item + " " + index);
    if(typeof item === 'number'){
        num+= item;
       
    }
    if(typeof item === 'string'){
        console.log(item.length);
        console.log(item);
    }
    if(typeof item === 'number'){
        console.log(item);
    }   
});

console.log(`Total sum of numbers in the array is: ${num}`);


let array = ["shahid","ansari",1,2,3,4]

array.forEach((values,index) => {
    console.log(values)
    console.log(index)
})

