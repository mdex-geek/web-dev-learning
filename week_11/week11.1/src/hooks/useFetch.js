import { useState,useEffect } from "react";

//custom hooks 
// export function usePostTitle() {
//     const [post, setPost] = useState({});

//     async function getPost() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const json = await response.json();
//         setPost(json);
//     }

//     useEffect(() => {
//         getPost();
//     }, []);


//     return post.title;
// }

export function useFetch(url){
    const [finalData , setFinalDate] =useState({});
    const [loading,setLoading] =   useState(true);

    async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json()
        setFinalDate( json);
        setLoading(false);
    }

    useEffect(()=>{
        getDetails();
    },[url]);

    useEffect(()=>{
        const intervalId= setInterval(() => {
            getDetails();
        }, 10*1000);

        return()=>{
            clearInterval(intervalId);
        };
    },[])



    return {
        finalData,
        loading
    };
}