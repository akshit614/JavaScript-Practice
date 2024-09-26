// AtomFamily in recoil 
// lets you create a group or family of atoms 
// Multiple components can use one atomFamily to access different atoms according to there needs or based on any specific input like id etc.
// Otherwise we have to create a new todo for each component's requirements 
// When you call atomFamily() it will return a function which provides the RecoilState atom based on the parameters you pass in.


import { RecoilRoot, useRecoilValue } from "recoil"
import { todoAtomFamily } from "./atom-family-helper"

function App(){

  return <RecoilRoot>
    <h1>TODOS</h1>
    <Todo id={1}></Todo>
    <Todo id={3}></Todo>
    <Todo id={3}></Todo>
    <Todo id={3}></Todo>
  </RecoilRoot>
}


function Todo({id}){
  const currentTodo = useRecoilValue(todoAtomFamily(id))
   
  return (
    <> 
      <h3>{currentTodo.title}</h3>
      <p>{currentTodo.description}</p>
    </>
  )
}

export default App