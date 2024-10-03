const express = require("express");

const app = express();

// Middleware to log method, URL, and timestamp
function logmiddle(req, res, next) {
    const currentDate = new Date();
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`hostname : ${req.hostname}`)
    console.log(`Date & Time: ${new Date()}`);

    next();
}

app.use(logmiddle);

// Sum route
app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
});

// Multiply route
app.get("/multiply", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a * b
    });
});

// Divide route
app.get("/divide", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a / b
    });
});

// Subtract route
app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
