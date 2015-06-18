var cc          = require('config-multipaas'),
    bodyParser  = require('body-parser'),
	multer      = require('multer'),
    express     = require('express');

var config      = cc(),
    app         = express();
	
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());	

var connection_string = '127.0.0.1:27017/ndc';
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
 	console.log("Using remote DB");
	connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" 
	                  + process.env.OPENSHIFT_MONGODB_PASSWORD    + "@" 
					  + process.env.OPENSHIFT_MONGODB_HOST        + ':' 
					  + process.env.OPENSHIFT_MONGODB_PORT        + '/' 
					  + process.env.OPENSHIFT_APP_NAME
};

var mongojs = require('mongojs');
//var db = mongojs('ndc', ['utfordrer']);
var db = mongojs(connection_string, ['utfordrer']);


app.get('/', function (req, res) {
	res.send('Sanity check version 4');
});

app.get('/api/challenge', function(req, res) {
	db.utfordrer.find().toArray(function(err, items) {
		res.send(items);
	});
})

app.post('/api/challenge', function(req, res) {
	res.send('TODO add new  challenger');
});


app.listen(config.get('PORT'), config.get('IP'), function () {
  console.log("Listening on " + config.get('IP') + ", port " + config.get('PORT') )
});

