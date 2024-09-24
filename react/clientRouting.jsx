// client side routing in react 
// For this we use react-router-dom to create routes in browser

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App(){

  return (
    <>
    <Topbar />
    <BrowserRouter> {/* Component to wrap group of routes */}
      <Routes> {/* component to define each route */} 
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  ) 
 
} 

export function Topbar(){

  return <div style={{background : "black", color:"white"}}>
    Hi From Topbar
    <button onClick={(() => {
      window.location.href = "/";
    })}>landing</button>
    <button onClick={() => {  
    window.location.href = "/dashboard";
      }}>Dashboard</button>

  </div>
}


function Dashboard(){
  return <div>
      Dashboard, Hi there
  </div>
}


function Landing(){
  return <div>
      Landing, Hi there
  </div>
}

export default App


// to run this code paste this in App.jsx File in your src folder of react project