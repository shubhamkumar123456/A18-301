// https://github.com/shubhamkumar123456/A18-301.git

const express = require('express');
const port = 8090;
const app = express();

// middleware --> middlwares are the functions that have the access of requesting to an object responding to an object they can also modify the request and response.


app.use(express.json())  //data parse 

app.use((req,res , next)=>{
    // res.send(" i am middleware")
    console.log("hello")
    next()
})

app.get('/', (req, res)=>{
    res.send("welcome page")
})



app.listen(port, ()=>{
    console.log("server is running")
})