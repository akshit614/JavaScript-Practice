// Anonymous functions in JS for function callback without giving name of function in the call statement
// Giving definition of function in the call statement

function someCalculation(a,b, callback){
  val = callback(a);
  val1 = callback(b);

  return val + val1;
}

const ans = someCalculation(2,3, function(n) {
  return n*n;
})

console.log(ans)

// can be done by this way also without anonymous function

function square(n){
  return n*n;
}

const ans2 = someCalculation(2,3, square)
console.log(ans2)