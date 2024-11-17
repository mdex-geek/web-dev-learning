import  JsonWebToken  from "jsonwebtoken";

function adminMiddleWare(req, res, next) {
  const token = req.headers.token;
  const decode = JsonWebToken.verify(token, Bun.env.JWT_SECRET_ADMIN);


  if (decode) {
    req.userId = decode.id;
    next();
  } else {
    res.status(403).json({
      message: "you are not sign in",
    });
  }
}

export { adminMiddleWare };
