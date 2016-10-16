var express = require('express');
var router = express.Router();

//Appel d'accès à la base de données
var mongojs = require('mongojs');
var db = mongojs('mongodb://test:test@ds013456.mlab.com:13456/ng2test');

router.get('/', function(req, res, next) {
	db.tasks.find(function(err, docs) {
		if(err) {
			res.send(err);
		}
		res.json(docs);
	})
});

module.exports = router;