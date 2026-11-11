#! for in loop 

// here in javascript only the key value pair tget value by for in loops

/* for in loop used in basicalluy as part in object with key and value pair

//  let any_obj {
 a : "shahid"
 b : 16
}
 */

let a_obj = {
 a : "shahid",
 b : 16,
 c : "pinki",
 d : 16
}

for(let key in a_obj){
    console.log(key)  // returning the value only key of object .
    console.log(a_obj[key])  // returing the value as value in object.


    if (a_obj[key] === "shahid")  // check to match value and give reasult 
    {
        console.log(`the print value is ${key}`)
    }
    else console.log("the value is not matched: ")
}


