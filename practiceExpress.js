// Revision of Express Http server
const express = require("express")

const app = express()

function calculateSum(n){
    sum = 0
    for (let i = 0; i < n; i++) {
        sum += i;   
    }
    return sum;
}

app.get('/',function(req,res){
    n = req.query.n;
    let ans = calculateSum(n);
    res.send(ans.toString())
})

app.listen(3001, function(){
    console.log(`Listning on port 3001`)
});