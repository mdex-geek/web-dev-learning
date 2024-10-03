const express = require("express");

const app = express();

let requestCount = 0;

function requestincrease(req, res, next) {
  console.log(`Total number of requests: ${++requestCount}`);
  next();
}

function realSumHandler(req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a + b,
  });
}

app.get("/admin", (req, res) => {
  res.json({
    message: "total number of requests made is " + requestCount,
  });
});

app.use(requestincrease);

app.get("/sum", realSumHandler);

app.get("/multiply",function (req, res) {
  const a = parseFloat(req.query.a); // Parse as float for multiplication
  const b = parseFloat(req.query.b);
  res.json({
    ans: a * b,
  });
});


app.get("/subtract", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a - b,
  });
});

app.get("/divide", function (req, res) {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (b === 0) {
    res.status(400).json({ error: "Division by zero is not allowed" });
  } else {
    res.json({
      ans: a / b,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
