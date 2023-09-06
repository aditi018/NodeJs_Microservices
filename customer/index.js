const express = require("express");
const app = express();

app.use(express.json());

app.use("/",(req,res,next)=>{
    return res.status(200).json({
        message : "hello from Customer server"
    })
})

app.listen(4444,()=>{
    console.log("Server running on port 4444");
})