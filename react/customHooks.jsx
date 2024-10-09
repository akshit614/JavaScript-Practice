// Custom Hooks in react
import axios from 'axios'
import React, {useEffect, useState} from 'react'


// Custom hook to fetch data
function useTodos(n) {
  const [todos, setTodos] = useState([]);  
  const [loading ,setLoading] = useState(true)

  function getData(){
    axios.get("http://localhost:8080/todos").then(res => {
        console.log(res.data.todos)
        setTodos(res.data.todos);
        setLoading(false)
    })
  }
  
  useEffect(() => {
      // adding setInterval so we can access the current or fresh updated data from DB 
      const value = setInterval(() => {
        getData()
    },n*1000);

    // Adding clearInterval as older clock should stop whenever n is passes with new value
    return () => {
      clearInterval(value)
    }

  },[n])

  return {todos, loading};
}

function App(){

  const {todos, loading} = useTodos(3);

  return (
    <div>

      { loading ? "Loading..." : todos.map(item => <Todos key={item.id} todo={item} />)}
    </div>
  )

}

function Todos({todo}) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  )
}

export default App