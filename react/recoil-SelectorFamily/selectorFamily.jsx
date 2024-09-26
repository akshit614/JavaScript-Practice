// Recoil Selector Family
// when we were working with the atoms then we needed a selector inside the atoms to make asynchronous call

// Same as when we were working with the atoms Family then we have to use selectorFamily inside the atomsFamily to make asynchronous call

import { RecoilRoot, useRecoilValue } from "recoil"
import { todoAtomFamily } from "./selectorFamily-helper"

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
   
  return <> 
      <h3>{currentTodo.title}</h3>
      <p>{currentTodo.description}</p>
    </>
  
}

export default App