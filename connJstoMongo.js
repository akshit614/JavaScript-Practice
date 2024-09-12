// Saving data in mongoDB database using post request in express app

const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const app = express()
const PORT = 3001;

app.use(express.json())

mongoose.connect("mongodb+srv://<your username>:<your password>@cluster0.y6ozh.mongodb.net/forPostReq");

const userSchema = mongoose.Schema({
    username : String,
    password : String
});

const newUser = mongoose.model("newUsers", userSchema);

app.post("/signup",async function(req,res){
    const name = req.body.username;
    const pass = req.body.password;

    const userExist = await newUser.findOne({username : name});
    if (userExist){
        return res.status(400).json({msg : "User with this username already exits"})
    }

    const user = new newUser({
        username : name,
        password : pass
    })

    user.save().then(() => {
        res.json({msg : "User saved successfully!"});
      }).catch(err => {
        console.error("Error saving user:", err.message); 
      });
})

app.listen(PORT,()=>{
    console.log(`Listning to port ${PORT}`);
  
})