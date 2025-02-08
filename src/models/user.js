const mongoose = require("mongoose");

const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
      trim: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address" + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value){
        if(!validator.isStrongPassword(value)){
          throw new Error("Enter a strong password" +value)
        }
      }
    },
    age: {
      type: Number,
      min: 18,
      max: 60,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["Male", "Female", "Other"].includes(value)) {
          throw new Error("Invalid gender data");
        }
      },
    },
    photoUrl: {
      type: "String",
      default:
        "https://imgs.search.brave.com/S90Umkbqu2GT2tQKxRncOgc1N06aH6HpyiCuPs_vWbA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/NjE5NTg2Ni9waG90/by9wb3J0cmFpdC1v/Zi1hLXlvdW5nLWhh/bmRzb21lLWluZGlh/bi1tYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVJwUjF1/NU5PN2p3MG1kU05B/V1Fab0prWENnWmVW/N2hUaXpZSGltM3pK/a1k9",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid photo url" + value);
        }
      },
    },

    about: {
      type: String,
      default: "This is a default about of the user",
      maxLength: 300,
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
