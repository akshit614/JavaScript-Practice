// ********** Creating Asynchro functions with using callback and promises ********** 
// Promised are best fir for asynchronous function

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
console.log("hi there"); //This will be printed to screen first because fs.readFile is a time taking function as it's nature is asynchronous

akReadsFile(onDone)


//Good way using promises
function AkshReadsFile(){
  return new Promise(function(resolve){
    fs.readFile("a.txt" ,"utf-8", function(err, data){
      resolve(data)
      console.log("Done")
    });
  });
}

// AkshReadsFile().then(onDone) // .then is used for directing the function what to do next

// Another way to do the previous statement 
let a = AkshReadsFile()
console.log(a)
a.then(onDone)
