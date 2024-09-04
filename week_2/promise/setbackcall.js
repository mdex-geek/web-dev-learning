// const fs = require('fs');

// function callback(err,content){
//     console.log(content );
// }

// fs.readFile('a.txt','utf-8',callback);



// setTimeout(() => {
//     console.log('hello from settimeout');
// }, 4000);

// console.log('i from here');

//call back hell
setTimeout(() => {
    console.log('hi');
    setTimeout(() => {
        console.log('hello');
    }, 3000);
    setTimeout(() => {
        console.log('hello there');
    }, 5000);
    
}, 1000);