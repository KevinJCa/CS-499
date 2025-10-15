var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var menuRouter = require('./app_server/routes/menu'); // Wires up the menu controller to connect it to the route for the /menu page.
var aboutRouter = require('./app_server/routes/about'); // Wires up the menu controller to connect it to the route for the /about page.
var contactRouter = require('./app_server/routes/contact'); // Wires up the menu controller to connect it to the route for the /contact page.
var apiRouter = require('./app_api/routes/index'); // Defines variable for API routes
var handlebars = require('hbs'); // Defines handlebars variable

// Brings in the database
require('./app_api/models/db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));

// register handlebars partials (https://www.npmjs.com/package/hbs)
handlebars.registerPartials(__dirname + '/app_server/views/partials'); // Call to register the partials folder

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS (Cross Origin Resource Sharing)
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menu', menuRouter); // Implements new menuRouter
app.use('/about', aboutRouter); // Implements new aboutRouter
app.use('/contact', contactRouter); // Implements new contactRouter
app.use('/api', apiRouter); // Implements the API routes

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
