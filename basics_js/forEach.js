const myArray = [1, 2, 3, 4];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

function getElmnt(str) {
  console.log(str);
}

myArray.forEach(getElmnt); // forEach takes a function as an argument and calls that function for each element of the array(iterable object)
