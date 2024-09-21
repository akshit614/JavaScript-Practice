/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  const [currTodo, setcurrTodo] = useState(1)
  
  return (
    <>    
      <button onClick={() => {
        setcurrTodo(1);
      }} > 1 </button>

      <button onClick={() => {
        setcurrTodo(2);
      }} > 2 </button>

      <button onClick={() => {
        setcurrTodo(3);
      }} > 3 </button>

      <button onClick={() => {
        setcurrTodo(4);
      }} > 4 </button>

      <button onClick={() => {
        setcurrTodo(5);
      }} > 5 </button>

      <Todo id={currTodo}></Todo>
    </>
  )
}

function Todo({id}){
  const[todos, setTodos] = useState({})

  useEffect(() => {
    axios.get("http://localhost:8080/todo?id=" + id)
      .then(response => {
        setTodos(response.data.todo)
      })
    
  }, [id]) // passes id as dependencies otherwise the todo will not change after clicking on button, it only render for first time
  // That's the feature of useEffect hook in react we have to pass changing dependency to empty array otherwise it ignores all calls after first call


  return <div>
    <h1>{todos.title}</h1>
    <p>{todos.description}</p>
  </div>
}

export default App