// Clousers give ss the ability to create functions that can remember their environment 
// or we can say the outer scope of a function

// Easy examples of a closure
function makeCounter() {
    let count = 0; // This variable is private to the closure
    return function() {
        count += 1; // This inner function can access the outer variable
        return count;
    };
}
let addCount = makeCounter(); // This returns a function that can be called to increment the count
console.log(addCount()); // 1

// what will it print
let count1 = 0;
(function printCount() {
    if (count1 === 0) {
        let count1 = 1;
        console.log(count1);    // acccessing from inner scope    
    }
    console.log(count1); // accesing from global scope
    
})();

// ------Write a function for this 
// var addSix = createBase(6);
// addSix(10);
// addSix(21);
// solution
function createBase() {
    return function (num) {
        console.log(num + 6);
    }
}

var addSix = createBase(6);
addSix(10);
addSix(21);


// ------Time optimization with clousers
// previously

function find(index) {
    let a = [];
  for (let i = 0; i < 1000000; i++) { a[i]= i*i }

  console.log(a[index])
}

console.time("6");
find(6); // this takes 37ms
console.timeEnd("6");
console.time("12");
find(12); // this takes 135ms
console.timeEnd("12");


// ------ optimized with clousers

function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++) { a[i]= i*i }
    return function (index) {
        console.log(a[index])
    }
}

const inner = find();
console.time("6");
inner(6); // this takes some time
console.timeEnd("6");
console.time("12");
inner(12); // this takes very very less time
console.timeEnd("12");


// ------Quiz

for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

  // what will it prints

