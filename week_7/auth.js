import  JsonWebToken from "jsonwebtoken";
const JWT_SECRET = "checkthepassword";

function auth(req, res, next) {
  const token = req.headers.token;
  const response = JsonWebToken.verify(token, JWT_SECRET);

  if (response) {
    req.userId = response.id;
    next();
  } else {
    res.status(403).json({
      message: "incorrect credential",
    });
  }
}

export{
    auth,JWT_SECRET
}