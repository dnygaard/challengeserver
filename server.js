var cc          = require('config-multipaas'),
    express = require('express');

var config      = cc(),
    app = express();


app.get('/', function (req, res) {
	res.send('hallo verden 2');
});

//app.use(express.static(__dirname + '/public')); // supply access ot ./public/index.html ++

app.get('/api/challenge/', function(req, res) {
	res.send('list all ');
});
app.post('/api/challenge/add', function(req, res) {
	res.send('add new  challenger');
});

app.listen(config.get('PORT'), config.get('IP'), function () {
  console.log( "Listening on " + config.get('IP') + ", port " + config.get('PORT') )
});

