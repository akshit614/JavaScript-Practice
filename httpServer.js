// INtroduction to Express servers for backend

const express = require("express")
 
const app = express();
const port = 3000;

app.get('/',function (req, res) {
    // res.send("Hello Express !!!");    
    res.json({
        name : "AKShit",
        age : 21
    })
}) 


app.post('/discussion', function (req, res)  {
    // res.send("Hello Express !!!");    
    console.log(req.headers);
    res.send({
        name : "DIVYANSHU ",
        age : 21
    })
})


app.listen(port, function() {
    console.log(`Example app listing at port ${port}`)
})


