import { atomFamily} from "recoil"

const TODOS = [{
    id: 1,
    title: "Go to Gym",
    description: "Hit the gym from 7-9"
}, {
    id: 2,
    title: "Go to eat food",
    description: "Eat food from from 9-11"
},{
    id: 3,
    title: "Reading",
    description: "Read book 5-7"
},{
    id: 4,
    title: "Go to gym",
    description: "Do Eercise"
}]



// defining atomFamily
export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    // here default is not a specific value but a function that return a writeable recoilState atom.
    default : id => {
        return TODOS.find(x => x.id === id)
    }
})
