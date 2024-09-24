// optimal way of client side routing in react is
// Using useNavigate() hook 
// It helps us to impliment the well known feature of recat that is single page application

import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom"

function App(){

  return (
    <>
    <BrowserRouter>
    <Topbar /> {/* To use usNavigate hook we have to use the component inside BrowserRouter */}
      <Routes>  
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  ) 
 
} 

function Topbar(){
    const navigate = useNavigate();

    return <div style={{background : "black", color:"white"}}>
      Hi From Topbar

      <button onClick={(() => {
        navigate("/"); {/* Defining route */}
      })}>landing</button>

      <button onClick={() => {  
        navigate("/dashboard");  {/* Defining route */}
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