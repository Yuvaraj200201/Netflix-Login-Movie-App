const express = require("express");
const cors = require("cors");
const app = express();
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

var username = "yuva@gmail.com"
var password = 7826313

app.post('/check', (req, res) => {
    console.log(req.body.user)
    if (req.body.user === username && req.body.pass == password) {
        res.send(true)
    } else {
        res.send(false)
    }
})
module.exports = app;