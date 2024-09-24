// Lazy routing in react 
// TO use lazy loading we have to use Suspense API because its asynchronous nature
// We have to wrap all the routes in Suspense fallback component 

import React, {Suspense,lazy} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Lazy loading the components
const Dashboard = React.lazy(() => import("./components/Dashboard"))
const Topbar = lazy(() =>  import("./components/Topbar"))
const Landing = lazy(() => import("./components/Landing"))

function App(){

  return (
    <>
    <BrowserRouter>
      <Topbar /> 
      <Suspense  fallback={<div>Loading...</div>}> {/* Suspense fallback Component */}
        <Routes>  
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  ) 
 
} 


export default App