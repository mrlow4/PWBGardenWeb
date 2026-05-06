var express = require("express");
var router = express.Router();
const historyCtrl = require("../controllers/history");

/* GET history page. */
router.get("/", historyCtrl.history);

module.exports = router;