// Pushing down the state in react

import { useState } from 'react'  

function App() {
  
  // In react one componant can only return top level parent element like main div just like One variable can only take one value not two thats why a ract componant can only return a top level element.
  
  // In react any time a parent componant renders all of its child componants will be re rendered. This sometimes unnecesarily re renders the componants that does not have any chnage.
  
  
  return (
    <>
      <HeaderwithButton/><br />
      <Header title='I live in india'></Header><br />
      <Header title='I live in india'></Header><br />
      <Header title='I live in india'></Header>
    </>
  )
}

// One way to stop unnecessary re-renders
// Pushing down the state 
// In this we make state variables in any other componant that needs to be re-render but not in main Componant so that whole thing should not re-render again and again
function HeaderwithButton() {
  const [name, setName] = useState("harkirat")
  
  function changeName() {
    setName("My name is " + Math.random())
  }

  return <div>
    <button onClick={changeName}>Change name</button><br /><br />
    <Header title={name}></Header>
  </div>

}

function Header(props){
  return <div>
    {props.title}
  </div>
}
 
export default App
