const express = require("express");
const app = express();
const cors = require("cors");
const proxy = require("express-http-proxy");

app.use(cors());
app.use(express.json());

app.use("/customer",proxy("http://localhost:4444"));
app.use("/shopping",proxy("http://localhost:8000"));
app.use("/",proxy("http://localhost:5555"));


app.listen(8001,()=>{
    console.log("Gateway running on port 8001");
})