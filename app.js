var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//mongoose.connect('mongodb://localhost/miniproject');
// mongoose.connect("mongodb://localhost:27017/YourDB"), { useNewUrlParser: true };
mongoose.connect('mongodb://127.0.0.1:3000/miniproject', { useNewUrlParser: true },(err,res)=>{
    if(!err){
        console.log(res)
    }
})



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(bodyParser.json());

app.get('/viewDetails', function(req, res){
	res.send('SUCCESS!');
})

app.post('/viewDetails', function(req, res) {
	var username = req.body.username;
	var phone = req.body.phone;
	var email = req.body.email;
	currentId++;
	products.push({
		id: currentId,
		username: username,
		phone: phone,
		email: email
	})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
