import { atom, selector } from "recoil"

// atoms in recoil
export const todosAtom = atom({
    key: "todos",
    default: [{
        title : "go to gym",
        description : "Go to gym at 9PM",
        completed : false
    },{
        title : "Get food",
        description : "Get food from market",
        completed : false
    },{
        title : "Pay gym fees",
        description : "Pay the fees of gym",
        completed : false
    },{
        title : "Take Vitamin",
        description : "Taking vitamin pills",
        completed : false
    }]
})

export const filterAtom = atom({
    key: "filter",
    default: ""
})

// selector in recoil
export const filteredSelector = selector({
    key: "filteredSelector",
    get: ({get}) => {
            const todos = get(todosAtom);
            const filter = get(filterAtom);
            return todos.filter(x => x.title.includes(filter) || x.description.includes(filter))
    }
}) 

