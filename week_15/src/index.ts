import express, { json , Response,Request} from "express";
import mongoose from "mongoose";
import * as jwt from "jsonwebtoken"; // Import all as `jwt`
import z from "zod";
import { userModel } from "./database/db";
import * as bcrypt from 'bcrypt'; // Import all as `bcrypt`
require('dotenv').config()


const app = express();

app.use(json());

async function main() {
    await mongoose.connect(process.env.DATABASE_STRING as string).then(() => console.log("connect to db")).catch((e) => console.error(e));

    app.listen(3000);
    console.log('connect to port 3000');
}

main()

//@ts-ignore
app.post("/api/v1/signup", async (req:Request, res:Response):void|Response =>{
    try{
        const requiredBody = z.object({
            username: z.string().min(3, "username is to small").max(10, "username is to big").trim(),
            password: z
                .string()
                .regex(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                    "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."
                ).trim(),
            email: z.string().email().toLowerCase().trim()

        });
        const passdata = requiredBody.safeParse(req.body);

        if (!passdata.success) {
            return res.status(400).json({
                error: "Validation failed",
                details: passdata.error.errors
            });
            return ;
        }

        const  saltround :number=10;
        const hashpassword :String = await bcrypt.hash(passdata.data.password,saltround);

       
        const newUser = await userModel.create({
                username:passdata.data.username,
                password:hashpassword,
                email: passdata.data.email
        })

        if(newUser){
            res.json({
                message:"user created"
            })
        }
        

    }catch (e) {
        console.error(e);
        if (e instanceof Error && e.message.includes("user is already ")) {
            return res.status(403).json({
                error: " User already exists with this email"
            })
        }
        if (e instanceof Error && e.message.includes("missing required fields ")) {
            return res.status(411).json({
                error: "Error in inputs: Missing required fields"
            })
        }

        return res.status(500).json({
            error: "Internal server error"
        });
    }

})

// @ts-ignore
app.post("/api/v1/signin", async (req:Request, res:Response) => {

    try {
        //validation
        const requiredBody = z.object({
            password: z
                .string()
                .regex(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                    "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."
                ).trim(),
            email: z.string().email().toLowerCase().trim()
        });
        // check the user request match with us requirment
        const passdata = requiredBody.safeParse(req.body);
        // if failed
        if(!passdata.success) {
            return res.status(400).json({
                error: "Validation failed",
                details: passdata.error.errors
            });
            return ;
        }
        // find the user
        const userfind = await userModel.findOne({
            email: passdata.data.email,
        });

        if(!userfind){
            res.status(403).json({
                message:"user do not exist"
            });
            return;
        }


        const passwordcompared :boolean = await bcrypt.compare(passdata.data.password,userfind.password);
        if(!passwordcompared){
            res.status(403).json({
                message:"wrong password"
            });
            return;
        }

        if (passwordcompared){
            const token = jwt.sign({
                id:userfind._id.toString(),
            },process.env.JWT_SECRET as string);
            res.status(200).json({
                token:token,
            })
        }

    } catch (e) {
        console.error(e);
        if (e instanceof Error && e.message.includes("do not match")) {
            return res.status(403).json({
                error: "not have a account"
            })
        }
        res.status(500).json({ error: 'An error occurred while creating the user'
        });
    }

})

app.post("/api/v1/content", (req, res) => {

})

app.get("/api/v1/content", (req, res) => {

})

app.delete("/api/v1/content", (req, res) => {

})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})
