var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gsm학과소개', {
  }
)
});
module.exports = router;