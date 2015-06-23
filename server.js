var cc          = require('config-multipaas'),
    bodyParser  = require('body-parser'),
	multer      = require('multer'),
    express     = require('express');

var config      = cc(),
    app         = express();
	
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());	
app.use('/', express.static(__dirname + '/pub'));

var connection_string = process.env.OPENSHIFT_MONGODB_DB_URL || '127.0.0.1:27017/ndc';
var mongojs = require('mongojs');
var db = mongojs(connection_string, ['utfordrer']);

	
app.get('/ver', function (req, res) {
	res.send('Sanity check  - version 8');
});

app.get('/api/challenge', function(req, res) {
	db.utfordrer.find().sort({ "tid":-1 }).toArray(function(err, items) {
		if (err) {
                res.send("An error has occurred: " + err);
        } else {
		        res.send(items); /* could have been res.json(items); */
	    }	
	});
})


app.post('/api/challenge', function(req, res) {	
    var challenger_body = req.body;
    console.log('Adding challenger: ' + JSON.stringify(challenger_body));
    db.utfordrer.insert(challenger_body);
	db.utfordrer.find().sort({ "tid":-1 }).toArray(function(err, items) {
		if (err) {
                res.send("An error has occurred: " + err);
        } else {
		        res.send(items);
	    }	
	});
});

app.delete('/api/challenge/:id', function (req, res) {
	var id = db.ObjectId(req.params.id);
	db.utfordrer.remove({"_id": id},function(err, docs) {
		if (err) {
            res.send("An error when attempting to delete: " + err);
        } else {			
	        console.log("Deleted challenger with id:" + id);		  
		    db.utfordrer.find().sort({ "tid":-1 }).toArray(function(err, items) {
		        if (err) {
                    res.send("An error has occurred: " + err);
                } else {
		            res.send(items);
	            }	
	        });
	    }	
	});	
});

app.listen(config.get('PORT'), config.get('IP'), function () {
  console.log("Listening on " + config.get('IP') + ", port " + config.get('PORT') )
});

