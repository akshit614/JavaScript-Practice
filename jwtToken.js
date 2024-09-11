const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {

  let user_exist = false;
  ALL_USERS.find(function (user) {
    if(user.username === username && user.password === password){
      user_exist = true;
    }
  })
  return user_exist;

}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  // jwt.sign is used for sign or create a new token or a random long string it uses a secret key to do it
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    // jwt.verify is used to verify the token recived in the authetication header it also uses jwt secret key to validate it
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    
    // res.json({ALL_USERS});

    //returs users other than this username

    const othreUsers = ALL_USERS.filter((user) => user.username != username);
    res.json({othreUsers})
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, function(){
  console.log("Listning");
})

