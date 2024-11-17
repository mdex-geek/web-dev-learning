import { Router } from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../database/db";
import JsonWebToken  from "jsonwebtoken";
import { z } from "zod";
const userRoute = Router();


userRoute.post("/signup", async (req, res) => {

 const requiredBody = z.object({
   email: z.string().email(),
   password: z.string(),
   firstName: z.string().min(1),
   lastName: z.string().min(1),
 });

 const parsedDataWithSuccess = requiredBody.safeParse(req.body);

 if (!parsedDataWithSuccess.success) {
   res.status(400).json({
     message: "incorrect credential",
   });
   return
 }


 const { email, password, firstName, lastName } = req.body;

   try {
     const hashedPassword = await bcrypt.hash(password, 10);
     await UserModel.create({
       email: email.toLowerCase(),
       password: hashedPassword,
       firstName: firstName,
       lastName: lastName,
     });
     res.json({
       message: "account is created ",
     });
   } catch (e) {
     res.json({
       message: `there is something wrong in your credential ${e}`,
     });
   }

});

userRoute.post("/signin",async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
       const user =  await UserModel.findOne({
            email:email,
        })
         if (!user) {
           return res
             .status(401)
             .json({ message: "Authentication failed. User not found." });
         }
         const isPasswordValid = await bcrypt.compare(password, user.password);
         if (!isPasswordValid) {
           return res
             .status(401)
             .json({ message: "Authentication failed. Wrong password." });
         }

        const token = JsonWebToken.sign({ firstName: user.firstName }, Bun.env.JWT_SECRET);

        res.status(200).json({
            message:"auth successful",
            token:token,
        })
        
    } catch (error) {
        res.json(
            error
        )
    }
});

userRoute.get("/purchases", (req, res) => {
  res.json({
    message: "purchase  course",
  });
});

export { userRoute };

