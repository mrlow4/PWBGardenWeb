var express = require("express");
var router = express.Router();
const wwaCtrl = require("../controllers/whoweare");

/* GET who we are page. */
router.get("/", wwaCtrl.whoweare);

module.exports = router;