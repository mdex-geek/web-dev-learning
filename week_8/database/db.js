import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId= mongoose.ObjectId;


  const user = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    LastNamme: String,
  });

   const admin = new Schema({
     email: { type: String, unique: true },
     password: String,
     firstName: String,
     LastNamme: String,
   });

    const course = new Schema({
      title:String,
      discription:String,
      price :Number,
      imageUrl:String,
      creatorId: ObjectId 
    });

    const purchase =new Schema({
        courseId :ObjectId,
        userId: ObjectId
    })

    const UserModel = mongoose.model("users",user);
    const adminModel =mongoose.model("admin",admin);
    const courseModel = mongoose.model("course",course);
const purchaseModel = mongoose.model("purshase",purchase)

export{
  UserModel,
  adminModel,
  courseModel,
  purchaseModel
}


