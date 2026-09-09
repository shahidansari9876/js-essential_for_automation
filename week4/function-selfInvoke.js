(function greeting (name, greeting ="welcome to automation testing"){
    console.log(`hii ${name} , we are ${greeting}`);
})('shahid', 'you are welcoming to automation testing playwright with javascript')

// can call only one time for the self invoke function

//when run the program above code will read below code gives error for intermiediate error. isn't function
(function newGreet (name, greetmessage){
    console.log(`${name} , ${greetmessage}`);
})('shahid',"hello sir, how are you ")