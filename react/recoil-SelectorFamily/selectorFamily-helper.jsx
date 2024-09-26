// when we were working with the atoms then we needed a selector inside the atoms to make asynchronous call

// Same as when we were working with the atoms Family then we have to use selectorFamily inside the atomsFamily to make asynchronous call

import axios from "axios"
import { atomFamily, selectorFamily} from "recoil"

export const todoAtomFamily = atomFamily({

    key: "todoAtomFamily",
    default : selectorFamily({
        key :"todoAtomSelectorFamily",
        get : (id) => async ({get}) => {
            const res = await axios.get(`http://localhost:8080/todo?id=${id}`)
            
            return res.data.todo;
        }
    })
})
