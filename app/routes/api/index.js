const express = require("express");
const router = express.Router();
const {addcomment , adduser , loadcomment , loaduser , home} = require('./../../controller/index');
//const apiv2 = require('./api-v2');

router.get("/", home);
router.get("/addcomment", addcomment);
router.get("/adduser", adduser);
router.get("/loadcomment", loadcomment);
router.get("/loaduser", loaduser);


module.exports = router;
