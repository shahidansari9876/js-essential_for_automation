#! rest function

/* ... arguments 
rest of the number it will take, 
... rest of the number will taken and put into arguments
and keep output from the lenght for each or for of method
*/

function sumof(num1, num2, ...numN){
    let totalSum = 0;
    for(let i=0;i < arguments.length;i++){
     totalSum += arguments[i]
    }

    return totalSum;
}

console.log(sumof(4,5,6,7))
console.log(sumof(1,2,3,4,5,65))
console.log(sumof(1,2))
console.log(sumof(1,44,5,56,6,77,8,4))


function substractof(num1, num2,...numN){
    let final= num1-num2;
    for (let args of numN){
        final =final-args
    }
    return final;
}

console.log(substractof(1,2,3,4,5))
console.log(substractof(1,2))
console.log(substractof(1,44,5))