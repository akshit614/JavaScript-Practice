
// Managing state with recoil while fetching data from a backend server 

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { notificationAtom,totalNotificationSelector} from "./recoil3-helper"
import { useEffect } from "react"
import axios from "axios"
// import { jobsAtom, messagingAtom, networkAtom, totalSelector } from "./store/atoms/count"

function App(){

  return <RecoilRoot>
           <MainApp />
        </RecoilRoot>
}

function MainApp(){
  const [notifications,setNotifications] = useRecoilState(notificationAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  useEffect(()=>{
    axios.get("http://localhost:8080/notifications").then(res => {
      setNotifications(res.data)
      }
    )
  },[])
   
  return (
    <>
      <button>Home</button>

      <button>Network ({notifications.network >= 100 ? "99+" :notifications.network})</button>
      <button>Jobs ({notifications.jobs >= 100 ? "99+" :notifications.jobs})</button>
      <button>Messaging ({notifications.messaging >= 100 ? "99+" :notifications.messaging})</button>
      <button>Notifications ({notifications.notifications >= 100 ? "99+" :notifications.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}


export default App