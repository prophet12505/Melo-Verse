
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const path = require("path");
const crypto = require("crypto");
const User = require("../models/User");
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use("/css", express.static(__dirname + "/css"));
// router.get("/", (req, res, next) => {
//   res.render("index");
// });


router.get("/home", (req, res) => {
  res.render("home");
});


// router.get("*", function (req, res, next) {
//   res.status(404);

//   res.render("404", { url: req.url });
// });

module.exports = router;
