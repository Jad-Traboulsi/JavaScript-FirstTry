const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref:'User'
    },
    msg: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
module.exports = mongoose.model('Message',messageSchema)