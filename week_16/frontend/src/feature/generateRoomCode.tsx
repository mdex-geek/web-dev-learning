// import { useRef } from "react";

function generateRoomCode(){
    // const roomCode = useRef();

    const value  = Math.floor(Math.random() *900000 + 100000)
    console.log(value);
}
export default generateRoomCode();