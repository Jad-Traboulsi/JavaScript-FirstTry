const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    res.status("200").json(msg:"List of messages")
});

module.exports = router;
