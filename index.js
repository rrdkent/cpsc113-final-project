
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});


app.get('/foo', function (req, res) {
  res.send('woot');
  res.sendStatus(200)
});

app.get('/robots.txt', function (req, res) {
  res.status(200).send('text/plain; charset=utf-8');
});


app.get('/mrw/class-is-done.gif', function (req, res) {
  res.status(302).redirect('https://i.imgur.com/pXjrQ.gif');
});

app.get('/posts/delete', function (req, res) {
  res.status(302).send('Deleted!');
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});