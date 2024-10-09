// SWR library for using data fetching hooks 
// Makes code much more easier
// created by vercel

import useSWR from 'swr';

const fetcher = async (url) => {
  const data = await fetch(url);
  const json  = await data.json();
  // console.log(json.todos);
  return json;
} 

function App(){

  const {data ,error, isLoading} = useSWR("http://localhost:8080/todos", fetcher);

  if(error) return <div>Failed to laod</div>
  if(isLoading) return <div>Laoding...</div>
  return <div>Hello! You have {data.todos.length} todos</div>

}


export default App