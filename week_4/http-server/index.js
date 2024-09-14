import express from 'express';

const app =  express();

//route handler
app.get('/',(req,res)=>{
    res.send('hello world');
});

app.listen(3000); //which port 