const a = [1,2,3] // Output [1,2,3,1,2,3]

console.log(...a,...a) // easy way
console.log(a.concat(a)) // easy way

a.push.apply(a,a); // binding way
console.log(a);

// a.push.call(a,...a)
// console.log(a);
 

// ********** write printAnimals() in such a way that it prints all animals in object below.
const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }

// Ans
for (let i = 0; i < animals.length ;i++) {
    printAnimals.call(animals[i],i)
}


//  ************************ Find min/max in an array and use apply to enhance a built-in function.

const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max

console.log(Math.min(...numbers))
console.log(Math.max(...numbers))

// using Math.min/Math.max apply

console.log(Math.max.apply(null,numbers));
console.log(Math.min.apply(null,numbers));


// ----------------------------------------
// Create a bound function

function f() {
  console.log( this ); // error
}

let user = {
  g: f.bind(null) // this will always point to global/window object
};

user.g();
