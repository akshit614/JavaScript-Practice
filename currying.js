// currying in js
// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. 
// It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).


// normal function 

function func1 (a,b) {
    return console.log(a + b); 
}

func1(4,5)

// Curried way

function func2(a){
    return function (b) {
        return console.log(a + b); 
    }
}

func2(4)(5);


//----- infinite currying

function add(a){
    return function (b) {
        if(b) return add(a + b)
        return a
    }
}

console.log(add(5)(5)(5)(5)(6)()); // we can call it infinitely
