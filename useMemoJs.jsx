
// UseMemo hook in react 
// It is used to remember the result of previous operations that happened frequently so that react don't need to calculate these expensive operations on re-renders 
import { useMemo, useState } from "react"


// Without using useMemo
// function App() {
//   const [count, setCount] = useState(0)
//   const [inputValue, setInputValue] = useState(1);

  
//     let add =0;
//     for (let i = 0; i <= inputValue; i++) {
//       add = add + i;   
//     }

//   return (
//     <>    
//     <input type="text" placeholder="Number" 
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//     /><br />
//     <p>Sum from 1 to {inputValue} is {add}</p>
//     <button onClick={() => {setCount(count + 1)}}>Counter ({count})</button> 
//     {/* Without using memoization every time we click on counter button whole component will re renders */} 
//     {/*that is not an optimal way to do it because it includes expensive operations like for loop */}
//     </>
//   )
// }


// Using useMemo
// Better way to do it
function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(1);

  let sum = useMemo(() => {

    let sum =0;
    for (let i = 0; i <= inputValue; i++) {
      sum = sum + i;   
    }
    return sum
  },[inputValue])

  return (
    <>    
      <input type="text" placeholder="Number" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      /><br />
      <p>Sum from 1 to {inputValue} is {sum}</p>
      <button onClick={() => {setCount(count + 1)}}>Counter ({count})</button> 
    </>
  )
}



export default App