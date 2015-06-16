var cc          = require('config-multipaas'),
    express = require('express');

var config      = cc(),
    app = express();


app.get('/', function (req, res) {
	res.send('hallo verden 1');
});

// var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
//var port  = process.env.OPENSHIFT_NODEJS_PORT || 3000;
//app.listen(port, ip);
//app.listen(3000);


app.listen(config.get('PORT'), config.get('IP'), function () {
  console.log( "Listening on " + config.get('IP') + ", port " + config.get('PORT') )
});

