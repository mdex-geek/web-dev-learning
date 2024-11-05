import { Router } from "express";

const courseRoute = Router();

courseRoute.post("/purchase", (req, res) => {
  //send back datato server
  res.json({
    message: "the  course you purchase ",
  });
});

courseRoute.get("/preview", (req, res) => {
  //get endpoint is used to retried the data from server
  res.json({
    message: "preview data",
  });
});


export{
  courseRoute
}