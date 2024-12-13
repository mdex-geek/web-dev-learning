import jwt from 'jsonwebtoken';
require('dotenv').config()
import {Request,Response,NextFunction} from 'express';


function middleware (req:Request,res:Response,next:NextFunction){
    const token:string | string[] | undefined = req.headers.authorization;
    // @ts-ignore
    const tokenVerify = jwt.verify(token ,process.env.JWT_SECRET as string );
    if(tokenVerify){
        // @ts-ignore
        req.userId = tokenVerify.id ;
        next();
    }
    else{
        res.status(401).json({
            message: 'Unauthorized',
        });
    }
}

export default middleware;