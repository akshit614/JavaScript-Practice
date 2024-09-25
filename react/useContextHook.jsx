// useContext hook in react 
//Used to woek with context API and help to get rid of Prop drilling

import { useContext, useState } from "react"
import { countContext } from "./context"

function App(){

  const[count, setCount] = useState(0)

  // We have to wrap anyone that wants to use the teleported value inside a provider
  return (
    <>
    <countContext.Provider value={count}>
      <Count setCount={setCount} />
    </countContext.Provider>
    </>
  )
}

// Now we don't need to pass count as a prop here
function Count({setCount}){
  return <div>
    <Countrendrer />
    <Button setCount = {setCount} />
  </div>
}


function Countrendrer(){
  const count = useContext(countContext);
  return <div>
    Count {count}
  </div>
}

function Button({setCount}){
    const count = useContext(countContext);
  return <div>
    <button onClick={() => {setCount(count + 1)}}> Increament </button>
    <button onClick={() => {setCount(count - 1)}}> Decreament </button>
  </div>
}


export default App

/*
 Code of Context.jsx
  Creating the teleporter

  import { createContext } from "react";
  export const countContext = createContext(0);
*/