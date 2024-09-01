function myAsyncFunction(){
  let p = new Promise (function (resolve){
    // some async logic here
    setTimeout(function(){
      resolve("Hii World !")  
    }, 5000)
  });
  return p;
}


// promises without async await 
function main(){

  myAsyncFunction().then(function(value){
    console.log(value) 
  });
}
main();

// Promises using async await 
// this is just a better way to make code more readable only, deep inside it does the same thing
// it is a good practice
async function main2(){
  let ans = await myAsyncFunction()
  console.log(ans)
}
main2();

console.log("last one ") // this will be logged first bcz of asynchronous functions

