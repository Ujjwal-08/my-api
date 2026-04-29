const express = require("express");
const router = express.Router();

// TODO: implement auth properly
router.post("/login", (req, res) => {
  res.send("not implemented");
});

module.exports = router;