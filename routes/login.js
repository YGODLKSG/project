var express = require('express');
var router = express.Router();

var model = require('../model/DB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {
      
  });
});

router.post('/', function(req, res){
  console.log('로그인 시도');

  var id = req.query.id || req.body.id;
  var password = req.query.password || req.body.password;

  if(id && password){
    model.checkmember(id,password,function(err,result){
      if(err){   
        console.log(err);
        res.redirect('login');
      }
      else{
        console.log('성공');
        res.redirect('/');
      }
      
    });
    }else{
      console.log('입력값 없음');
     res.redirect('login');
    } 
});

module.exports = router;