// typescript is strictly typed language
// Its like javascript + strict type checking
// TypeScript is never runs or executes it is compiled down to a .js file and then executes.
// This conversion is done by TSC compiler.


// JS code
// let x = 1;
// console.log(x);

// Ts code
let x : number = 1;
console.log(x);

// JS code 
// function greet1(name){
//     console.log("Hello! " + name);
// }


// Ts code
function greet(name: string) {
    console.log("Hello! " + name);    
}
greet("Akshit")

// assgning a default return type to functions
function sum(a : number, b:number) : number {
    return a+b;
}

console.log(sum(4,5));

// if we do not assign a default return type then it automatically infer the return type
function isLegal(age : number)  {
    if (age>=18) {
        return true
    } else {
        return false
    }
}
let a = isLegal(45)

// passing a function as a argument in typescript
function runEveryOneSec(fn : ()=> void) {
    setInterval(() => {fn()}, 1000);
}

runEveryOneSec(function () {
    console.log("hi there");
    
})