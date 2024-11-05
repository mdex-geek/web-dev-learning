import { Router } from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../database/db";
import JsonWebToken  from "jsonwebtoken";
const userRoute = Router();


userRoute.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  try {
    const hashedPassword = await bcrypt.hash(password,10);
    await UserModel.create({
    email : email.toLowerCase(),
      password : hashedPassword,
      firstName : firstName,
      lastName : lastName
    }
      
    );
    res.json({
      message: "account is created ",
    });
  } catch (e) {
    res.json({
      message: `there is something wrong in your credential ${e}`
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

        const token = JsonWebToken.sign({ email: user.email }, Bun.env.JWT_SECRET);

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
