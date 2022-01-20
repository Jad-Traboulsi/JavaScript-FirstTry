const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password too short !"],
    },
    username: {
      type: String,
      lowercase: true,
      trim: true,
    },
    tries:{
      type:Number,
      max:[3,"You tried too much"]
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
module.exports = mongoose.model("User", userSchema);