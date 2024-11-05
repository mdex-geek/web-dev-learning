import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

await mongoose
  .connect(
    "mongodb+srv://greekof022:EcXnuohLEYxEs2vX@cluster0.35qfb.mongodb.net/test"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });


const User = new Schema({
    email:{type:String,unique:true},
    password:String,
    name:String
});

const Todo = new Schema({
    title:String,
    done: Boolean,
    userId: ObjectId
});

const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);

export {
   UserModel,
   TodoModel,
};