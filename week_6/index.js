const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECERT = 'deepanshuGarg';
const app = express();

app.use(express.json());

const users = [];

app.get('/',(req,res)=>{
    res.sendFile(__dirname +"/public/index.html")
})

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })
    res.send({

        message: 'you are signup up'
    })
    console.log(users);

});

app.post("/signin", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((user) => user.username ===username  && user.password === password); //it will give true
    if(user){
        const token = jwt.sign({
            username:username
        },JWT_SECERT);
        user.token = token;
        res.send({
            token
        })

    }else{
        res.status(403).send({
            message : "invalid username or password"
        })
    }
    console.log(users)
});

function auth(req,res,next){
    const token  = req.headers.token;
    const decodedInformation  = jwt.verify(token,JWT_SECERT); 
    if(decodedInformation.username){
        req.username= decodedInformation.username;
        next();
    }else{
        res.json({
            message:"You are not logged in"
        })
    }
}

app.use(auth);

app.get('/me',(req,res)=>{
    const foundUser = users.find(usertoken => usertoken.username === req.username); 
    res.send({
            username : foundUser.username,
            password: foundUser.password
    });
    

});


app.listen(3000);