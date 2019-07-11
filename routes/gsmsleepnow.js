var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gsm기숙사현황', {
      
  });
});

module.exports = router;
