// Connecting to mongoDB database
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")


mongoose.connect("mongodb+srv://akkisingh8266:7Ks1540mOobvY0le@cluster0.y6ozh.mongodb.net/userapp") // creates new database naming userapp

// defining that how the user object should look alike (fields,values,types etc...) 
const userSchema = mongoose.Schema({
    name: String, 
    email : String, 
    password : String
})

// creates new Collection in userapp database or in what ever your databse name is
const User = mongoose.model('Users',userSchema);

// creating an actual object to store in database
const user = new User({
    name : "misuse", 
    email : "akki5@gmail.com", 
    password : "565656" 
})

// saving the object in DB and logging the result
user.save().then(() => {
    console.log("User saved successfully!");
  }).catch(err => {
    console.error("Error saving user:", err.message); 
  });

