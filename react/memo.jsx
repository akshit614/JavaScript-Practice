// Using React.memo to stop unnecessary re-renders

import React, { useState } from 'react'  
import './App.css'

function App() {  
  const [name, setName] = useState("anthony jhonson")
  
  function changeName() {
    setName("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={changeName}>Change name</button><br /><br />
      <Header title={name}></Header><br />
      <Header title='I live in india'></Header><br />
      <Header title='I live in india'></Header><br />
      <Header title='I live in india'></Header>
    </div>
  )
}

// React.memo
const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})


 
export default App
