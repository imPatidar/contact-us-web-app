const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contactsRouter = require('./routes/contact-us');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Host React App
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact-us', contactsRouter);

module.exports = app;
