const express = require("express");
const app = express();

// app.use is used to convert all the data of body of a post or put request to json format so that our code can handle easily.
app.use(express.json());

app.post("/health-check", (req, res) => {
  const kidneys = req.body.kidneys;
  const totalKidney = kidneys.length;

  res.send("your total kidneys are " + totalKidney);
});

//Global catches : Error handeling middlewares :: takes 4 input parameters

// global catches help us to kepp safe and private our server details from user 
// In case of server crash
// And shows user a prettier message
// these are defined at the end of all routes in express servers

app.use(function (err, req, res, next) {
  // res.json({
  //   msg: "Server is down",
  // });
  res.send("Something is wrong with our server");
});

app.listen(3000);
