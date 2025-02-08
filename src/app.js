const express = require("express");
const { connectDB } = require("./config/database");
const app = express();

const User = require("./models/user");
// const user = require("./models/user");
app.use(express.json());

// I.  Add data to database using post method
app.post("/signup", async (req, res) => {
  // Creating instance of user model

  const user = new User(req.body);

  try {
    await user.save();
    res.send("User Added successfully");
  } catch (err) {
    res.status(401).send("Error adding user" + err.message);
  }
});

// II. Read data from the database

// get one user using emalID
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.findOne();
    if (!users) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(404).send("Something went wrong");
  }
});

// III. Get aal the documnets from database
// Fetchinf all the objects from database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.send(users);
  } catch (err) {
    res.status(404).send("Something went wrong ");
  }
});

// IV.Delete api for deleting data from database

app.delete("/delete", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = User.findByIdAndDelete(userId);
    res.send("user deleted successfully");
  } catch (err) {
    res.status(404).send("Something went wrong");
  }
});

// V. Updating data
app.patch("/update/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed for this field");
    }
    if (data?.skills.length > 10) {
      throw new Error("Only 10 skills are allowed");
    }
    if(data?.age > 60){
      throw new Error("To aged ")
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "before",
      runValidators: true,
    });
    res.send("user updated successfully");
  } catch (err) {
    res.status(400).send("UPDATE FAILED :" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection successfully");
    app.listen(1212, () => {
      console.log("Server running on port 1212");
    });
  })

  .catch((err) => {
    console.log("Database cannot be connected!! ");
  });
