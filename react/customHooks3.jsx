// creating a timer based custom hook 

import { useEffect, useState } from "react"

const useInterval = (fn, timeout) => {

  useEffect(() => {
    const interval =  setInterval(fn, timeout);

    return () => {
      clearInterval(interval)
    }
  },[])

}

export default function App(){

  const [timer ,setTimer] = useState(0)
    
    useInterval(() => {
      setTimer(c => c + 1)
    }, 1000);

  return (
    <div>The timer is at {timer}</div>
  )

}