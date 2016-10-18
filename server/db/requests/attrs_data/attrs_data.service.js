//attrs_data_service

var Category = require('../../models/category_model');

module.exports = function(app){

	app.get('/home/get_categories', function(req, res){
    	Category.find({}, function(err, json) {
	        if(err) return console.error(err);
	        res.send(json);
	    });	
	});
};