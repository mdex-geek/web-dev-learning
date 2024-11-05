import { useEffect, useRef, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

function useDebounce(props){
  const currentClock = useRef();
  
  const fn = ()=>{
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(props,200);
  }

  return fn
}

function App() {

  function sendDataToBackend(){
    fetch("api.amazon.com/search/")
  }

  const debounced = useDebounce(sendDataToBackend);

  return (
    <>
    <input type="text" onChange={debounced}/>
    </>
  );
}

//custom hook
// function useCounter(childern){
//   const [counter,setCounter] = useState(childern);

//   function update(){
//     setCounter(counter =>counter+1);
//   }
//   return {
//     counter:counter,
//     update:update
//   }
// }

export default App;
