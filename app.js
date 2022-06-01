const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
var methodOverride = require('method-override')

// database
const database = require("./database/config");
database.connect();


// routers
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.TOKEN_SECRET));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// routes
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/account', usersRouter);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on http://localhost:%d in %s mode", this.address().port, app.settings.env);
});