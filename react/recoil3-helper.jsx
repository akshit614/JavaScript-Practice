import { atom, selector } from "recoil"

// export const networkAtom = atom({
//     key : "networkAtom",
//     default : 20
// })


// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default : 4
// })


// export const messagingAtom = atom({
//     key : "messagingAtom",
//     default : 12
// })


// export const notificationAtom = atom({
//     key: "notificationAtom",
//     default: 123
// })

// export const totalSelector = selector({
//     key:"totalSelector",
//     get : ({get}) => {
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const messagingAtomCount = get(messagingAtom);
//         const notificationAtomCount = get(notificationAtom);

//         return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationAtomCount;
//         }
// })



// Alternate or better option

// creating a object in default that covers all above created atoms
// clean and less code
// And it's get updated whenever data comes from a backend server
// So it is a win-win 
export const notificationAtom = atom({
    key : "notificationAtom",
    default : {
        network : 0,
        jobs : 0,
        notifications : 0,
        messaging : 0
    }
})

export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get}) => {
        const totalNotification = get(notificationAtom);
        return totalNotification.network + totalNotification.jobs + totalNotification.messaging + totalNotification.notifications;
    }
})


