var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/thome');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var thome = require('./routes/thome');
var add_assignment = require('./routes/addas');
var edit_assignment = require('./routes/editas');
var assignment_table = require('./routes/assignment_table');
var download = require('./routes/downloadManager');
var update_assignment = require('./routes/upas');
var delete_assignment = require('./routes/delete_assignment');
var view_submission = require('./routes/viewsubmission');
var add_marks = require('./routes/addMark');
var assignment_report = require('./routes/assignmentReport');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test',testRouter);
app.use('/thome',thome);
app.use('/addas',add_assignment);
app.use('/astable',assignment_table);
app.use('/download',download);
app.use('/edas',edit_assignment);
app.use('/upas',update_assignment);
app.use('/delas',delete_assignment);
app.use('/viewsubmission',view_submission);
app.use('/addMark',add_marks);
app.use('/genAsReport',assignment_report);

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
