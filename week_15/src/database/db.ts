
import mongoose, {Schema, model, Types} from "mongoose";

const userschema = new Schema({
    username: {type:String, required:true},
    email: {type:String, required:true,unique:true},
    password: {type:String, required:true}
})

const tagschema = new Schema({
    tags: {type:String, required:true, unique:true}
});
//{
//    "tags: ""
//} let a = tag.findOne({"tags": 'your_tags'})
// if (!a) {
//   tag.create({"tags": ""})
// }

const  contentType: string[] = ['image','video','article','audio'];

const contentSchema = new Schema({
    link: {type:String, required:true},
    type: {type:String, required:true, enum: contentType},
    title: {type:String, required:true},
    tags: {type: [tagschema]},
    userId: [{type:Types.ObjectId, ref:'user'}],
});

// tags: [{tags: ""}, {tags: ""}]

export const userModel = model('user',userschema);
export const tagsModel = model('tags',tagschema);
export const contentModel = model('content',contentSchema);


