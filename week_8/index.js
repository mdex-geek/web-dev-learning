import express from 'express';
import mongoose from "mongoose";
const port = 3000;
import { userRoute } from './routes/users';
import { courseRoute } from './routes/courses';
import { adminRoute } from "./routes/admin";
const app = express();

app.use(express.json());
app.use('/api/v1/admin',adminRoute)
app.use('/api/v1/user',userRoute);
app.use('/api/v1/course',courseRoute)



async function main() {
    await mongoose
      .connect(
        Bun.env.DATABASE_STRING
      )
      .then(() => console.log("connect with db"))
      .catch((err) => {
        console.error(`error in db ${err}`);
        process.exit(1);
      });

    app.listen(port);
    console.log("backend server start")
}

main();