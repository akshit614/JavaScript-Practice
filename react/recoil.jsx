// Recoil - State management library in react
// Recoil help us to manage state variables
// By using this we can define state variables as atoms in other file and simply call them using react recoil hooks and use them where ever it is needed
// We dont have to define it globally or on every component
// we have wrap main component in RecoilRoot component

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

function App(){
  
  return (
    <>
    <RecoilRoot>  
      <Count  />
    </RecoilRoot>
    </>
  )
}

function Count(){
  console.log("Count re rendered");
  
  return <div>
      <Countrendrer />
      <Button />
  </div>
}

function Countrendrer(){
  const count = useRecoilValue(countAtom); // this recoil hook gives us atom value
  return <div>
    Count {count}<br /><br />
  </div>
}

function Button(){
    const [count, setCount] = useRecoilState(countAtom); // This recoil hook give us both recoil state variables (variable and setVariable)
  return <div>
    <button onClick={() => {setCount(count + 1)}}> Increament </button><br /><br />
    <button onClick={() => {setCount(count - 1)}}> Decreament </button>
  </div>
}

export default App

/*
code of coutn.jsx

Defining recoil variable called as atoms
import { atom } from "recoil"

  export const countAtom = atom({
      key: "countAtom",
      default: 0
  })

*/
