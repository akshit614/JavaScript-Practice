// creating custom hook for getting info that user is online or not

import { useEffect, useState } from "react";

const useIsOnline = () => {

  // const [online,setOnline] = useState(false)
  
  // One solution
  // useEffect(() => {
    //   if (window.navigator.onLine) {
      //     setOnline(true)    
      //   }
      // },[])
      
  //another soluion
  const [online,setOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    window.addEventListener("online" ,() => {
      setOnline(true)
    })
    
    window.addEventListener("offline" ,() => {
      setOnline(false)
    })

  },[])

  return online;

}

export default function App(){

  const online = useIsOnline()

  if (!online) {
    return "Please connect to internet";
  }
  return "You are good to go";
}