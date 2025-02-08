const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://soundaleatul:OWYRjYmAhlilTNm9@namastenode.aaofi.mongodb.net/devTinder"
  );
};

module.exports = {connectDB}




