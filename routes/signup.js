var express = require('express');
var router = express.Router();

var model = require('../model/DB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', {
      
  });
});

router.post('/', function(req, res) {
    console.log('회원가입 시도');
    var id = req.query.id || req.body.id;
    var password = req.query.password || req.body.password;
    var name = req.query.name || req.body.name;
    console.log('ID : ' + id + ' PW : ' + password + ' name : ' + name);
    if(id && password && name){
        model.addUser(id, password, name, function(err, result){
        
            if(err){
            
                console.log(err);
                res.redirect('signup');
        
            }if(result){
            
                console.log('성공');
                res.redirect('login');
        
            }else{
           
                console.log('추가 안됨');
                res.redirect('signup');
        
            }
        });
    }else{
        console.log('입력값없음');
        res.redirect('signup');
    }
});

module.exports = router;
