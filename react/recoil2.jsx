// Recoil - State management library in react
// Recoil help us to manage state variables
// By using this we can define state variables as atoms in other file and simply call them using react recoil hooks and use them where ever it is needed
// We dont have to define it globally or on every component
// we have wrap main component in RecoilRoot component

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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
      <Button2 />
  </div>
}

function Countrendrer(){
  const count = useRecoilValue(countAtom); // this recoil hook gives us atom value
  return <div>
    Count {count}<br /><br />
  </div>
}

// This will rerender Buttons every time we click on them
function Button(){
  console.log("Button render");
  
  const [count, setCount] = useRecoilState(countAtom); // This recoil hook give us both recoil state variables (variable and setVariable)
  return <div>
    Button component buttons   <br />
    <button onClick={() => {setCount(count + 1)}}> Increament </button><br /><br />
    <button onClick={() => {setCount(count - 1)}}> Decreament </button><br /><br />
  </div>
}


// Alternate optimal approach
// This will not render buttons again and again
function Button2(){
  console.log("Button2 re-render");

    const setCount = useSetRecoilState(countAtom); // This recoil hook give us only set state variable and it is optimal to use it when other variable not needed
  return <div>
    Button2 component buttons <br />
    <button onClick={() => {setCount(c => c + 1)}}> Increament </button><br /><br />
    <button onClick={() => {setCount(c => c - 1)}}> Decreament </button><br /><br />

    Watch the effect of console
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
