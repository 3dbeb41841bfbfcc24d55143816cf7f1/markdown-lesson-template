var express = require('express');
var app = express();
var morgan = require("morgan");

// Middleware
app.use(morgan('combined'));

app.use(function(request, response, next) {
  console.log('Custom Middleware: %s request to %s from %s',
              request.method, request.path, request.ip);
  next();
});

// Routes
app.get('/', function(request, response) {
  // res.render('index');
  response.send('Hello from Express!');
});

// Start up the Express Engine
var port = 3000;
var server = app.listen(port);
console.log('App listening on port ' + port);
