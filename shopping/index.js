const express = require("express");
const app = express();

app.use(express.json());

app.use("/",(req,res,next)=>{
    return res.status(200).json({
        message : "Hello from the shopping server",
    })
})


app.listen(8000,()=>{
    console.log("Server running on port 8000");
})