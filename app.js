var express = require('express');
var expressHbs = require('express-handlebars');
var app = express();
var twitterConfig = require('./twitter');
var Twit = require('twit');

var T = new Twit(twitterConfig);

app.engine('hbs', expressHbs({
  extname: 'hbs',
  defaultLayout: 'main.hbs'
}));

app.set('view engine', 'hbs');

var port = (process.env.NODE_ENV === 'production') ? 80 : 1234;

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/reactjs-conf/twitter', function(req, res) {
  T.get('search/tweets', { q: '#reactconf', count: 100 }, function(err, data, response) {
    res.json(data);
  });
});

app.use(express.static('public'));

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
