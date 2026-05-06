var express = require("express");
var router = express.Router();
const wwdCtrl = require("../controllers/whatwedo");

/* GET what we do page. */
router.get("/", wwdCtrl.whatwedo);

module.exports = router;