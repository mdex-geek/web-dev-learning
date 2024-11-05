import { Router } from "express";
import {adminModel} from "../database/db"
const adminRoute = Router();

adminRoute.post("/signup", (req, res) => {
  res.json({
    message: "admin signup",
  });
});

adminRoute.post("/signin", (req, res) => {
  res.json({
    message: "admin signin",
  });
});

// adminRoute.use(adminmiddleware);

adminRoute.post("/", (req,res)=>{
    res.json({
        message:"couser cerate "
    })
})

adminRoute.put("/",function(req,res){
    res.json({
      message: "course update",
    });
})

adminRoute.get('/bulk',(req,res)=>{
    res.json({
        message:"get course in bulk"
    })
})

export{
    adminRoute
}