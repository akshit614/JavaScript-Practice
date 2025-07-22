// call() method
// call(): Invokes the function immediately with a specified "this" value and arguments passed individually.


var obj = {name  : "akki"}

function greeting (age, hobby) {
    return "hello "  + this.name + " age is " + age + " and loves " + hobby;
}

console.log(greeting(14, "cricket")); // This will not print the name bcz there is no name variable in functions context
// or in global scope also

console.log(greeting.call(obj,11,"cricket")); // call will give context to functions and point the function to the passed object in the params

// *********************************************

// apply(): Similar to call(), but accepts arguments as an array.


//console.log(greeting.apply(obj,11,"cricket")); // gives error bcz it needs params as an array
console.log(greeting.apply(obj,[11, "cricket"]));


// *************************************************

// bind(): Returns a new function with "this" permanently bound to the specified value. The original function is not invoked immediately.

const bindFn = greeting.bind(obj)
// now this bindFn has the body of greeting and context of obj for it's whole life

console.log(bindFn(25, "eating shusie"));
console.log(bindFn(35, "reading books")); // now we can use bindFn as a copy of greeting always 

