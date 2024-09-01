// ********** Asynchronous functions using callback and promises ********** 
// Promised are best fit for asynchronous function

const fs = require("fs");

// Ugly way with the function Callback
function akReadsFile(callback){
  //asynchronous function
  fs.readFile("a.txt" , "Utf-8", function(err, data) {
    callback(data);
  });
}

function onDone(data){
  console.log(data);
}
console.log("hi there"); //This will be printed to screen first because fs.readFile is a time taking a function as its nature is asynchronous

akReadsFile(onDone)


//A good way is to use promises
function AkshReadsFile(){
  return new Promise(function(resolve){
    fs.readFile("a.txt" ,"utf-8", function(err, data){
      resolve(data)
      console.log("Done")
    });
  });
}

// AkshReadsFile().then(onDone) // .then is used for directing the function what to do next

// Another way to make the previous statement 
let a = AkshReadsFile()
console.log(a)
a.then(onDone)
