const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Atul", lastName: "Soundale" });
});

app.post("/user", (req, res) => {
  res.send("Data saved to database");
});
app.put("/user", (req, res) => {
  res.send("Data changed from database");
});
app.delete("/user", (req, res) => {
  res.send("Data deleted");
});
app.use("/user",(req,res)=>{
  res.send("All http methods are handled here!!!")
})
app.listen(7777, () => {
  console.log("Server is successfully listening on port no 7777");
});

