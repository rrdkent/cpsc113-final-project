
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});


// Source for the res.SendStatus: https://github.com/expressjs/express/issues/2269

app.get('/foo', function (req, res) {
  res.send('woot');
  res.sendStatus(200)
});

app.get('/robots.txt', function (req, res) {
  res.send('text/plain; charset=utf-8');
  res.sendStatus(200)
});


app.get('/mrw/class-is-done.gif', function (req, res) {
  res.redirect('https://i.imgur.com/pXjrQ.gif');
  res.sendStatus(302)
});