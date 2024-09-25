import { RecoilRoot,  useRecoilValue, useSetRecoilState } from "recoil"
import { filterAtom, filteredSelector, todosAtom } from "./store/atoms/todos"
import { useState } from "react"

function App(){

  return (
    <>
    <center>
      <RecoilRoot>
        <Todos />
      </RecoilRoot>
      </center>
    </>
  )
}

function Todos(){
  return <div>
    <AddTodo></AddTodo>
    <FilterRenderer />
    <TodosRendr />
  </div>
}

function AddTodo(){
  const [title, setTitle] = useState("")
  const [description, setDescription ] = useState("")
  const setTodos = useSetRecoilState(todosAtom)

  const titleOnChange = ({target : {value}}) => {
    setTitle(value)
  }
  
  const descOnChange = ({target : {value}}) => {
    setDescription(value)
  }

  const addItem = () => {
    setTodos((todo) => [
      ...todo,{
        title: title,
        description: description
      }
    ])
  }

  return <div>

    Title : <input type="text" value={title} placeholder="Title" onInput={titleOnChange}/><br /><br />

    Desciption : <input type="text" value={description} placeholder="Description" onInput={descOnChange} /> <br /><br />

    <button onClick={addItem}>Add todo</button> <br /><br />


  </div>
}

function TodosRendr(){
  const todo = useRecoilValue(filteredSelector)
  
return <div>
        {todo.map(function (todo,index) {
          return <div key={index}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
            </div>
            })}
    </div>
}

function FilterRenderer(){
  const setFilter = useSetRecoilState(filterAtom)

  const updateFilter = ({target: {value}}) => {
    setFilter(value);
  }

  return <div>
    Filter : <input type="text" placeholder="Filter" onChange={updateFilter}/>

    {/* Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="">Select</option>
        <option value="gym">gym</option>
        <option value="food">food</option>
        <option value="vitamin">vitamin</option>
      </select> */}
  </div>
}


export default App