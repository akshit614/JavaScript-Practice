function calculate(a,b, func){
  const result = func(a,b)
    return result;
}

function mul(a,b){
  return a*b;
}

const val = calculate(8,3,mul); // calling function insid ea function -> function callback
console.log(val)
