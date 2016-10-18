var mongoose = require('../dbconfig');

var categorieSchema = mongoose.Schema({
    name: String
});
  
module.exports = mongoose.model('attrs_data_cats', categorieSchema);