var express = require('express');
var expressHbs = require('express-handlebars');
var app = express();

app.engine('hbs', expressHbs({
  extname: 'hbs',
  defaultLayout: 'main.hbs'
}));

app.set('view engine', 'hbs');

var port = (process.env.NODE_ENV === 'production') ? 80 : 1234;

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
