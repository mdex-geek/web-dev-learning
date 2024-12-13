import express from "express";
import path from "path";
import {Server} from "socket.io";
import http from "http";
// we are http because we need to connect socketio to express
const app = express();
const server = http.createServer(app);
const io = new Server(server);


//here we handle socket.io
//socket is a socket it has client info
io.on("connection", (socket)=>{
    socket.on('message',message =>{
        io.emit('message',message);
    })
})

app.use(express.static(path.resolve('./public')))

app.get("/", (req,res)=>{
   return res.sendFile("/public/index.html")
})

server.listen(9000,()=> console.log("server start at 9000"));