const express = require('express');
const app = express();
const session = require('express-session');

const port = 3000;

// messages
const listen = require('./data/messages');

//configs
const cookie = require('./data/config');
const cors = require("cors");

const corsOptionsContent = {
    "origin": "*",
    "methods": "GET,POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "allowedHeaders":['Content-Type']
};
const corsOptionsAuth = {
    "origin": "*",
    "methods": "GET,POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "allowedHeaders":['Authorization']
};

//environment
app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use( express.static( "public" ) );
app.use(session(cookie));

require('dotenv').config();

//database
const mongo = require('./model/mongoose');

const index = require('./routes/index');
const recieve = require('./routes/recieve');
const bulk = require('./routes/bulk');
const showdata = require('./routes/showdata');

app.use('/',index);
app.use('/recieve',cors(corsOptionsContent),recieve);
app.use('/bulk',bulk);
app.use('/showdata',showdata);

// error handling
const {errorRoute} = require ("./data/messages");
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(errorRoute);
});

app.listen(process.env.PORT,listen);