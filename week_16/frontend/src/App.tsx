import { useEffect, useRef, useState } from 'react'
import './App.css'




function App() {

  const [message,setMessage] = useState<string[]>([]);
  const wssend = useRef<WebSocket>() ; //used to send data

  // update the value do not want to re-render it
  const wsRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage=(event)=>{
      //when chat store there 
      setMessage(m => [...m,event.data]);
    }
    wssend.current= ws;
    ws.onopen = ()=>{
      ws.send(JSON.stringify({
        type:"join",
        "payload":{
          roomId:"red"
        }
      }))
    }
    // clear 
    // return ()=>{
    //   ws.()
    // }
  },[]);

  return (
    <>
      <div className='h-screen bg-black'>
        <br></br> <br></br> <br></br> 
        <div className='h-[95vh]'>{message.map(message => <span className='bg-white text-black rounded p-4 m-8'>{message}</span>)}</div>
        <div className='w-full bg-white flex'>

          <input ref={wsRef} className='flex-1 p-4'></input>

          <button onClick={()=>{
            const message = wsRef.current.value;
            wssend.current?.send(
            JSON.stringify({
              type:"chat",
            "payload":{
              "message":message,
            }
            }))    
          }} className='bg-purple-600 text-white p-4'>send message</button>
        </div>
      </div>
    </>
  )
}

export default App;
