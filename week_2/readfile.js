// const fsa = require("fs");

// function read(err, data){
//     console.log(data);
// }
// // read - its is callback function (function argument )-means passing a function to another function.
// const content  = fsa.readFile('b.txt',"utf-8",read); // asychronously 
// console.log(content);

// const content2  = fsa.readFile('a.txt',"utf-8",read); 
// console.log(content2);

// console.log('done!!!')


// console.log("I will run immedietely i am 1 -1"); //1 control come here 
// loop() // <- here 2


// function run() {
// 	console.log("I will run after 1s -5"); 
// }

// setTimeout(run, 1000); //setTimeout will move the function to browser API which will move to the callback queue then event loop will take it out from the queue and move it to the callstack
// after that it will executed


// loop1() // here3 cpu work on this while settimeout some one handling


// var count =0;


// function loop(){
//     for (let index = 0; index < 99999999; index++) {
//         count++;
        
//     }
//     console.log('from loop of 99999999 -2') 
// }


// console.log("I am 2 -4"); // <- here js here come


// var cout =0;


// function loop1(){
//     for (let index = 0; index < 10000; index++) {
//         cout++;
        
//     }
//     console.log('from loop of 10000 -3') 
// }

function first() {
    console.log("First");
  }
function second() {
    first();
    console.log("Second");
  }
second();