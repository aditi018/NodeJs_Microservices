const express = require("express");
const app = express();
const cors = require("cors");
const proxy = require("express-http-proxy");

app.use(cors());
app.use(express.json());

app.use("/customer",proxy("http://localhost:8002"));
app.use("/shopping",proxy("http://localhost:8004"));
app.use("/",proxy("http://localhost:8003"));


app.listen(8008,()=>{
    console.log("Gateway running on port 8008");
})