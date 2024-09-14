import express from "express";

const app =  express();

app.use(isOldEnoughMiddleWare);

app.get("/ride1", (req,res)=>{
    res.json({
            msg:"you can succesfull riden in ride 1"
    })
})

app.get("/ride2", (req,res)=>{
        res.status(411).json({
            msg:"you can go in ride2 "
        })
})

app.listen(3000)

// function isOld(age){
//     if(age>=14){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function isOldEnoughMiddleWare(req,res,next){
    const age = req.query.age;
    if(age>=14)
    {
       next();
    }
    else
    {
        res.json({
            msg:"soory you are not of age yet "
        })
    }
}