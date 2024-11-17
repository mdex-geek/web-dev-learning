import  JsonWebToken  from "jsonwebtoken"

function userMiddleWare(req,res,next){
    const token = req.headers.token;
    const decode = JsonWebToken.verify(token, Bun.env.JWT_SECRET);

    if(decode){
        req.userId = decode._id;
        next();
    }else{
        res.status(403).json({
            message:"you are not sign in"
        })
    }
}

export {
    userMiddleWare
}