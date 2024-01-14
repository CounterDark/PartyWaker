'use strict';
require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');
const { load } = require('./App/loader');

const DB_URL = process.env.DB_URL || '';

//#region import routers
var indexRouter = require('./routes/index');
var menuRouter = require('./routes/Menu/index');
var gameRouter = require('./routes/Game/index');
var matchMakerRouter = require('./routes/MatchMaker/index');
//#endregion

var app = express();

mongoose.connect(DB_URL)
  .then(() => {
    console.log('Database connected!');
    load()
      .then(() => console.log('Collections loaded!'))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// eslint-disable-next-line no-unused-vars
const corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200
}

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//#region Routers setup
app.use('/', indexRouter);
app.use('/menu', menuRouter);
app.use('/game', gameRouter);
app.use('/match-maker', matchMakerRouter);
//#endregion

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  } catch (err) {
    console.error('Error while closing the mongoose connection', err);
    process.exit(1);
  }
});

module.exports = app;
