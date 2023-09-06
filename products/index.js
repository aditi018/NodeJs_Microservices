const express = require("express");
const app = express();

app.use(express.json());

app.use("/",(req,res,next)=>{
    return res.status(200).json({
        message : "Hello from products server",
    })
})


app.listen(5555,()=>{
    console.log("Serevr running on port 5555");
})