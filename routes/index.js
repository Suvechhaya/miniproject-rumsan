var express = require('express');
var router = express.Router();
var Users = require('../models/users');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Project' });
});

/* GET about page. */
router.get('/about',function(req, res){
	res.render('about')
});

/* GET view details page. */
router.get('/viewDetails',function(req, res){
  res.render('viewDetails')
});


/* POST signUp/index   page. */
router.post('/',function(req, res){
  console.log('req....', req.body);
  var user = new Users({
      username: req.body.username,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
      repassword: req.body.repassword
    
  });

  var promise = user.save();
  promise.then((user) => {
    console.log("user signed up");
    res.redirect('/login');
  })

});


/* GET login page. */
router.get('/login',function(req, res){
	res.render('login');
});

/* POST login page. */
router.post('/login',function(req,res){
  console.log(req.body);
  if(req.body.username && req.body.password){
    Users.findOne({username : req.body.username, password : req.body.password}, function(err, user){
      if(user != null){
        console.log('Logged in with ', user);
        res.redirect('/viewDetails');
      }else{
        console.log('User not valid');
      }
    });
  }else{
    console.log("Please enter username and password");
  }

});

module.exports = router;
