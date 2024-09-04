const fs = require('fs');
function setTimeoutpromisified(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(
            resolve
        , ms);
    });
}

async function solve(){
    await setTimeoutpromisified(1000);
    console.log('hi');
    await setTimeoutpromisified(3000);
    console.log('hello');
    await setTimeoutpromisified(5000);
    console.log('hi there');
}
solve();

function readfileAsync(filepath){
    return new Promise((resolve,reason)=>{
        fs.readFile(filepath,'utf-8',function(err,data){
            resolve(data);
        })
    })
}