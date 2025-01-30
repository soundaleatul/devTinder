const express = require("express")

const app = express();

app.use("/test",(req,res)=>{
  res.send("Hello from testers  !!!")
})
app.use("/dev",(req,res)=>{
  res.send("Hello from developers  !!!")
})
app.use("/prog",(req,res)=>{
  res.send("Hello from programmers  !!!")
})

app.listen(7777,()=>{
  console.log("Server is successfully listening on port no 7777")
})