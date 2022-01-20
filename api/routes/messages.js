const express = require("express");
const messageModel = require("../models/message");

let router = express.Router();
let messages = [];

router.get("/getAllMessages", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(500).json({ message: "You arent logged" });
    }
    messages = await messageModel
      .find()
      .populate({ path: "name", select: "username email" });
    res.status("200").json(messages);
  } catch (error) {
    console.error(error);
    res.status("500").json(error.message);
  }
});

router.get("/getId/:messageId", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(500).json({ message: "You arent logged" });
    }
    console.log(req.params.messageId);
    let message = await messageModel.findOne({ _id: req.params.messageId });
    res.status("200").json(message);
  } catch (error) {
    console.error(error);
    res.status("500").json(error.message);
  }
});

router.patch("/updateById/:messageId", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(500).json({ message: "You arent logged" });
    }
    const inputtedData = req.body;
    let message = await messageModel.findOneAndUpdate(
      { _id: req.params.messageId },
      inputtedData,
      { new: true }
    );

    res.status("200").json(message);
  } catch (error) {
    console.error(error);
    res.status("500").json(error.message);
  }
});

router.delete("/deleteById/:messageId", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(500).json({ message: "You arent logged" });
    }
    await messageModel.findOneAndDelete({ _id: req.params.messageId });

    res.status("200").json({ message: "deleted" });
  } catch (error) {
    console.error(error);
    res.status("500").json(error.message);
  }
});

router.post("/addMessage", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(500).json({ message: "You arent logged" });
    }

    const { msg } = req.body;
    let message = await messageModel.create({
      msg: msg,
      name: req.session.user._id,
    });
    console.log(message);
    res.status("200").json(message);
  } catch (error) {
    console.error(error);
    res.status("500").json(error.message);
  }
});

router.get("/getAllMessagesOfUser", async (req, res) => {
  try {
    if (req.session && req.session.user) {
      let message = await messageModel.find({ name: req.session.user });
      res.status("200").json(message);
    } else {
      return res.status(500).json({ msg: "You arent logged in" });
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});


module.exports = router;
