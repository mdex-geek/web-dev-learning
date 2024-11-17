import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId= mongoose.ObjectId;


const user = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const admin = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
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


