import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

interface User{
    socket :WebSocket;
    room: string;
}

let allSockets: User[]=[];

wss.on("connection", (socket)=>{

    socket.on("message",(event)=>{
        const passedMessage = JSON.parse(event as unknown as string);
        if (passedMessage.type == "join"){
            allSockets.push({
                socket,
                room:passedMessage.payload.roomid
            })
        } 

        if(passedMessage.type == 'chat'){
            const currentRoom = allSockets.find((x)=> x.socket== socket)?.room;
            for(let i=0;i<allSockets.length;i++){
                if(allSockets[i].room == currentRoom){
                    allSockets[i].socket.send(passedMessage.payload.message);
                }
            }
        }
    });
});
