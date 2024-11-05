import { useState, useEffect } from "react";

function App() {
  const [count,setCount] =useState(0);

  function increase(){
    setCount(c=>c+1);
  }

  return <div>

    <Counter count={count} />
    <button onClick={increase} >increase count</button>
  </div>
}

function Counter(props) {

  useEffect(()=>{
    console.log("mount");

    return function (){
      console.log("unmount");
    }
  },[]);

  useEffect(()=>{
    console.log('count has changed ');

    return function(){
      console.log('cleanup inside second coming')
    }
  },[props.count])

  return <div>
    Counter {props.count}
  </div>
}

export default App;
