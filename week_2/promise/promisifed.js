
const fs = require('fs');

// one way 
function setTimeoutpromisified(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve,ms);
    })
}

function print(){
    console.log('hello there my man');
}



//promisifed hell
// setTimeoutpromisified(1000).then(function() {
//     console.log('hi');
//     setTimeoutpromisified(3000).then(function() {
//     console.log('hello');
//     setTimeoutpromisified(5000).then(function() {
//         console.log('hi there');
        
//     });
//     }); 
// });

// other way
// function setTimeoutreadfile(file,ms){
//     return new Promise((resolve,reject)=>{ 
//             setTimeout(() => { 
//                 fs.readFile(file,'utf-8',(err,content)=>{
//                     if(content){
//                         resolve(content);
//                     }
//                 })
//             }, ms);  
//     })
// }
// setTimeoutreadfile('a.txt',3000).then(console.log)


// function readFilejk(filepath){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(filepath,'utf-8',(err,content)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(content);   
//             }
//         });
//     });
// }

// readFilejk('a.txt').then( (content)=> console.log(content)).catch(err =>console.log(`error in file `,err));


//promise chain to save from callback hell
setTimeoutpromisified(1000).then(function(){
    console.log('hi');
    return setTimeoutpromisified(3000);
}).then(function () {
    console.log('hello');
    return setTimeoutpromisified(5000);
}).then(()=>{
    console.log('hi there');
});