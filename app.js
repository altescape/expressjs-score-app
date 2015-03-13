var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var score_results = [];
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/image', function (req, res) {
  res.render('score', { title: 'Scores' });
});

app.post('/image/:image/score/:score', function (req, res) {
  var image = req.params.image;
  var score = req.params.score;
  res.status(201).json({ votes: { image: image, score: score } });
  //res.render('votes', { votes: { image: image, score: score } }); 
});

var server = app.listen(3000, function () {
  
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
