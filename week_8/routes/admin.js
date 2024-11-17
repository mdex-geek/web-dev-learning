import { Router } from "express";
import { adminModel, courseModel } from "../database/db"
const adminRoute = Router();
import JsonWebToken from "jsonwebtoken";
import bcrypt from "bcrypt";
import { z } from "zod";
import { adminMiddleWare } from "../middleware/admin";

adminRoute.post("/signup", async (req, res) => {

  const requiredBody = z.object({
    email: z.string().email(),
    password: z.string(),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
  });

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "incorrect credential"
    })
    return
  }

  const { email, password, firstName, lastName } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await adminModel.create({
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
}
);

adminRoute.post("/signin", async (req, res) => {

  const requiredBody = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "incorrect credential",
    });
  }

  const { email, password } = req.body;

  try {
    const user = await adminModel.findOne({
      email: email,
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

    const token = JsonWebToken.sign(
      { id: user._id },
      Bun.env.JWT_SECRET_ADMIN
    );

    res.status(200).json({
      message: "auth successful",
      token: token,
    })

  } catch (error) {
    res.json(
      error
    )
  }
});

adminRoute.use(adminMiddleWare);

adminRoute.post("/", async (req, res) => {
  const adminId = req.userId

  const { title, description, imageUrl, price } = req.body;

  const course = await courseModel.create({
    title, description, imageUrl, price, creatorId: adminId
  })

  res.json({
    message: "course created",
    courseId: course._id
  })


})

adminRoute.put("/", async function (req, res) {

  const adminId = req.userId


  const { title, description, imageUrl, price, courseId } = req.body;

  const course = await courseModel.updateOne({ _id: courseId, creatorId: adminId }, {
    title, description, imageUrl, price,
  })

  res.json({
    message: "course update",
  });


})

adminRoute.get('/bulk', async (req, res) => {
 const adminId = req.userId;

  console.log(adminId)

  const course = await courseModel.find({  creatorId: adminId })

  console.log(course)

  res.json({
    message:"course update",
    course
  });
})

export {
  adminRoute
}