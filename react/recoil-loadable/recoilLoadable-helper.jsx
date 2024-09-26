import axios from "axios"
import { atomFamily, selectorFamily} from "recoil"

export const todoAtomFamily = atomFamily({

    key: "todoAtomFamily",
    default : selectorFamily({
        key :"todoAtomSelectorFamily",
        get : (id) => async ({get}) => {
            // adding delay of 3 sec
            await new Promise(r => setTimeout(r,3000) )
            const res = await axios.get(`http://localhost:8080/todo?id=${id}`)
            
            return res.data.todo;
        }
    })
})
