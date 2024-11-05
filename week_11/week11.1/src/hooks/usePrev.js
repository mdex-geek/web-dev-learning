import { useEffect, useRef } from "react"

export const  usePrev = (value) => {
    console.log(`from usePrev before ${value}`);
    const ref =  useRef();

    useEffect(()=>{
        ref.current =value;
        console.log(`from usePrev useEffect ${value}`);
    },[value]);

    console.log(`from usePrev return ${ref.current}`);
    return ref.current;
}