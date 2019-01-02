var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./src/config/mongodb');
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var moviesRouter = require('./src/routes/movie/movies');  
var postsRouter = require('./src/routes/posts/post'); 

var bodyParser  = require('body-parser');



var app = express();

//app.use(require('connect-history-api-fallback')());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Router Group setting

app.use('/users', usersRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/posts', postsRouter);
app.use('/', indexRouter);
//end 

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

//

db.connect( function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } 
})


module.exports = app;
