import { useRef } from "react";
// import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const inputRef = useRef();
  function focusinput(){
    inputRef.current.focus();
  }
  return (
    <>
      <div>
        Sign up
        <input ref={inputRef} type= {"text"}></input>
        <input type= {"text"}></input>
        <button onClick={focusinput}>submit </button>
      </div>
    </>
  )
}

{/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/neet/online-coaching-class-11" element={<Class11Program></Class11Program>} ></Route>
            <Route path="/neet/online-coaching-class-12" element={<Class12Program></Class12Program>} ></Route>
            <Route path="/" element={<Landing />} ></Route>
            <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}

// function Layout() {
//   return <div style={{ height: "100vh" }}>
//     <Link to={'/'}> allen</Link>
//     ||
//     <Link to="/neet/online-coaching-class-11" > class11</Link>
//     ||
//     <Link to={"/neet/online-coaching-class-12"}> class 12</Link>

//     <div style={{ height: "90vh" }}>
//       <Outlet ></Outlet>
//     </div>


//     footer
//   </div>
// }

// function ErrorPage() {
//   return (
//     <>
//       <div>
//         soory page not found
//       </div>
//     </>
//   );
// }

// function Landing() {
//   return <div>
//     <h1>
//       welcome to allen
//     </h1>
//   </div>
// }

// function Class11Program() {
//   return <div>
//     <h1>neet program for class 11</h1>
//   </div>
// }

// function Class12Program() {
//   const navigate = useNavigate();

//   function redirectUser() {
//     navigate("/");
//   }

//   return <div>
//     <h1>neet program for class 12</h1>
//     <button onClick={redirectUser}>Go back to landing page </button>
//   </div>
// }

export default App
