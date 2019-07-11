var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gsm하루일과', {
      
  });
});

module.exports = router;
