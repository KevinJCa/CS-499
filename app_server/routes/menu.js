var express = require('express');
var router = express.Router();
var controller = require('../controllers/menu');

/* GET menu page */
router.get('/', controller.menu);

module.exports = router;