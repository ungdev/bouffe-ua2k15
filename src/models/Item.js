var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    type: String,
    normalPrice: Number,
    reducedPrice: Number,
    sendToCook: Boolean
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
