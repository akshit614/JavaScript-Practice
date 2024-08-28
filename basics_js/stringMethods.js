function getLength(str) {
  return str.length;
}

function findIndexOf(str, target) {
  return str.indexOf(target);
}

function findLastIndex(str, target) {
  return str.lastIndexOf(target);
}

function getSlice(str, start, end) {
  return str.slice(start, end);
}

function replaceString(str, target, replacement) {
  return str.replace(target, replacement);
}

function splitString(str, separator) {
  // console.log("Original String:", str);
  // console.log("After split:", str.split(separator));
  return str.split(separator)
}


myName = "Divyanshu coder chaudhary coder";

console.log(getLength(myName)); // returns index of string
console.log(findIndexOf(myName, "coder")); // return index of target in string
console.log(findLastIndex(myName, "coder")); // return last index of target in string
console.log(getSlice(myName, 0, 11)); //retruns slice of string from index 0 to 10

let partOfString = "Pro Coder".slice(0,5) // another way of doing the slicing
console.log(partOfString)

console.log(replaceString("Hello World", "Hello", "JavaScript"))// replacing 'hello' with 'javascript'
// splitString("Hello,World", ",");
console.log("Split is "+ splitString("Hello World", "l"))

