const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.status(200).send("Merge serveru");
  res.status(200).json({ Status: "OK" });
});

module.exports = router;