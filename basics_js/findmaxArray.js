let array = [9999999,100000000,2,996,256,32,5656565];
let max = array[0];
let totalNumbers = array.length;

for (let i = 0; i < totalNumbers; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log(max);

