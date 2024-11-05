import bcrypt from 'bcrypt';
import express from "express";
import { UserModel, TodoModel } from "./db.js";
import {JWT_SECRET ,auth } from "./auth.js";
import z from "zod";
import  JsonWebToken from "jsonwebtoken";
const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {

  const requiredBody = z.object({
    email: z.string().email(),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."
      ),
    name: z.string().min(1),
  });

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  if(!parsedDataWithSuccess.success){
    res.json({
      message:"incorrect credential",
      error: parsedDataWithSuccess.error
    })
    return 
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const hashPassword = await bcrypt.hash(password,10);

  try {
    await UserModel.create({
      email: email,
      password: hashPassword,
      name: name,
    });
    res.json({
      message: "you are create the account",
    });
  } catch (e) {
    res.status(500).json({
      message:"message already exists"
    })
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await UserModel.findOne({   
    email: email,
  });

  if(!user){
    res.status(403).json({
      message:"user do not exist"
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password,user.password);

  if (passwordMatch) {
    const token = JsonWebToken.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      message: token,
    });
  } else {
    res.status(403).json({
      message: "you are not create the account",
    });
  }
});

app.use(auth);

app.post("/todo", (req, res) => {
    const userId= req.userId;
    const title = req.body.title;
    const done = req.body.done;


    TodoModel.create({
        title,
        userId,
        done
    });
});

app.get("/todos", async (req, res) => {
    const userId = req.userId;
    const user = await TodoModel.find({
      userId,
    });
    res.json({
        user 
    })
});



app.listen(3000);
