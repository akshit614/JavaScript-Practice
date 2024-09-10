// ZOD library use case
const express = require("express")
const zod = require("zod")

const app = express();
// Zod is library that is used for schema validation like array,numbers, strings and many other things
// we can create zod objects to how our input should look a like 
const schema = zod.array(zod.number()); 
app.use(express.json())

app.post('/routenew',function(req,res){
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);// parse the array of numbers
  if(!response.success){
    res.status(411).json({
      msg:"input is invalid"
    })
  }else {
  res.send({
    response
  })    
  }
})  



app.listen(3000)

// example

// we will write zod schema object for this type of input -->
/*
  email : string ==> email
  password : 8 letters
  age : number
  countrty : "IN", "US"
*/

// and it will be as
const schema1 = zod.object({
  email:zod.string().email(), // checks for email
  password : zod.string().min(8), // checks for at least 8 letter from input
  age: zod.number(),
  country : zod.literal("IN").or(zod.literal("US"))
})

// Zod is very useful to validate inputs
// Removing headache of writting long neste if-else cases to validate the input as we have expected