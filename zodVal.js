// ZOD use case
const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json());

function validateInputs(object) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(object);
  console.log(response);
  return response;
}

app.post("/login", function (req, res) {
  const response1 = validateInputs(req.body);

  if (!response1.success) {
    res.status(411).json({
      msg: "input is invalid",
      errors: response1.error.errors, 
    });
    return;
  }

  res.send({
    msg: "Login successful",
    data: response1.data, 
  });
});

app.listen(5000)


// input body example

// {
//   "email": "user@gmail.com",
//   "password": "85963214"
// }


// output will look like
// {
//     "msg": "Login successful",
//     "data": {
//         "email": "user@gmail.com",
//         "password": "85963214"
//     }
// }