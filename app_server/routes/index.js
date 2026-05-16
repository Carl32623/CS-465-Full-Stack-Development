var express = require('express');
var router = express.Router();
const ctrMain = require('../controllers/main');

/* GET Homepage */
router.get('/', ctrMain.index);

module.exports = router;

