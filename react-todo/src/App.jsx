import { useState } from 'react'
import './App.css'

function App() {
  const [totos, setTodos] = useState([{
    id: 1,
    title: "Todo 1",
    description : "Todo 1 description",
    completed: false
  },{
    id: 2,
    title: "Todo 2",
    description : "Todo 2 description",
    completed: true
  },{
    id: 3,
    title: "Todo 3",
    description : "Todo 3 description",
    completed: false
  }])

  function addTodos() {
    setTodos([...totos, {
      id: 4,
      title: "Todo 4",
      description : "Todo 4 description",
      completed: true
    }])   
  }

  return (
      <div>
        <button onClick={addTodos} >Add Todo</button>
        {totos.map(function(todo) { 
          return <Todo key={todo.id} title={todo.title} description={todo.description} />
        })}
        {/* { <Todo title={totos[0].title} description={totos[0].description}></Todo>
        <Todo title={totos[1].title} description={totos[1].description}></Todo>
        <Todo title={totos[2].title} description={totos[2].description}></Todo> */} 
      </div>
    
  )
}

/**
 * Component to render a todo item
 * @param {{title: string, description: string}} props
 * @returns {JSX.Element}
 */
function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default App
