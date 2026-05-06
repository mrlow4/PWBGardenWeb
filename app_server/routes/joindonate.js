var express = require("express");
var router = express.Router();
const joinDonateCtrl = require("../controllers/joindonate");

/* GET join/donate page. */
router.get("/", joinDonateCtrl.joindonate);

module.exports = router;