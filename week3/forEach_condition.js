#! for each condition

/*  for each conditions*/

let arr =["shahid", "ansari", 1, 2, 3]
let emparr=[]
let empstring=[]
let one=[]
arr.forEach((values,index) => {
    if(typeof(values) === "number"){
    emparr.push(values)  // push method add the element into the array in empty or existing array
    }
    if(typeof (values) === "string") {
        empstring.push(values)
    }
    console.log(`this is the from arr index ${index}`)
})
console.log(emparr)
console.log(empstring)

emparr.forEach((index,value)=> {
    if(index !== 3 && index !== 5){
        one.push(index)
    }
    console.log(`this is the emparr value :${value}`)
    console.log(`this is the index emparr: ${index}`)
})

console.log(one)