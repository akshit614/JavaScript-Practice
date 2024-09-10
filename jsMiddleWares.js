// Middlewares learning

//without middlewares doing authentication and input validation
const express = require("express");
const app = express();

// app.get('/login',function(req, res){
//   const kidneyId = req.query.kidneyId;
//   const userName = req.headers.userName;
//   const password = req.headers.password;

//   // Authentication process with ugly way
//   if (userName != "Akshit" && password != "pass"){
//     res.status(400).json({
//       msg: "User does not exixt"
//     })
//     return;
//   }

//   // Input Validation process but wih ugly way
//   if(kidneyId !=1 && kidneyId != 2){
//     res.status(400).json({
//       msg:"Invalid inputs!"
//     })
//     return;
//   }

//   res.send("You are healthy");
  
// })


// I it not right to write this authentication and validation code again and again for each route
// here comes the middlewares in picture

// code using middlewares for handling these pre checks 


function userMiddleWare(req,res,next){
  if (req.headers.username != "Akshit" || req.headers.password != "pass"){
    res.status(400).json({
      msg: "User does not exixt"
    })
  }else{
    next();
  }
  
}

function inputMiddleWare(req,res,next) {
  if(req.query.kidneyId !=1 && req.query.kidneyId != 2){
    res.status(400).json({
      msg:"Invalid inputs!"
    })
  }
  next();
}

// Now we can use these middlewares to multiple routes without writting the logic again and again
app.get('/signin',userMiddleWare,inputMiddleWare,function(req,res){
  res.send("Your are ok")
})

app.get('/check',userMiddleWare,inputMiddleWare,function(req,res){
  res.send("Your are check ok")
})

app.get('/trying',userMiddleWare,inputMiddleWare,function(req,res){
  res.send("Your are trying ok")
})

app.listen(3000,function(){
  console.log("Listning on port 3000")
})