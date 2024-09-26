// useRecoilStateLoadable hook of recoil
// used to optimaly handle async calls 
// used to add loading to user 

import { RecoilRoot, useRecoilStateLoadable, useRecoilValueLoadable } from "recoil"
import { todoAtomFamily } from "./recoilLoadable-helper"

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
  //const [currentTodo, setCurrentTodo] = useRecoilStateLoadable(todoAtomFamily(id))

  // OR
  
  const currentTodo = useRecoilValueLoadable(todoAtomFamily(id))

  // console.log(currentTodo.state);

  if (currentTodo.state === "loading" ) {
    return <div>
      Loading....
    </div>
  } else if (currentTodo.state === "hasValue") {
    return <> 
        <h3>{currentTodo.contents.title}</h3>
        <p>{currentTodo.contents.description}</p>
      </>
  }else {
    return <div>
      There are some backend error
    </div>
  } 
}

export default App