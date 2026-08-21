#! for of loop 

/* 
for ... of loop 
i.e> 
for(let var of array)
{
//actions
}

*/

let browser= ["chrome", "edge", "brave"]


// returing the index value if called for in loop in array
for(let launch in browser){
    console.log(launch)
}


// returning the valued if alled for of loop in araay type
for (let launched of browser){
    console.log(launched)
}