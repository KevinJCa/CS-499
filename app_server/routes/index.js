var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
// Passes the request for the site-default starting page to our new main controller
router.get('/', ctrlMain.index);

module.exports = router;
