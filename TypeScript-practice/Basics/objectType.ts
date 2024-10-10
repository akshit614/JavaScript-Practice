// assiging type to objects
// how can we do it ? answer : using inteface

// object is like 

const user= {
    firstname : "akki",
    lastname : "singh",
    age : 21 
}

// Interface wise method
interface User {
    firstname : string,
    lastname : string,
    email ?: string, // optional element by using ?:
    age : number 
    
}

// we can assign type to object by using this interface as follows
function isLegal(user : User) {
    if (user.age >= 18) {
        return true
    } else {
        return false
    }
}

isLegal({
    firstname : "akki",
    lastname : "singh",
    age : 21 
})

// another example
function greet(user : User) {
    console.log("hi there " + user.firstname + " " + user.lastname + " you are age of " + user.age);
    
}

greet({
    firstname : "akki",
    lastname : "singh",
    age : 21 
})