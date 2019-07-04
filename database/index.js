const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/backcountry');

var fecSchema = new mongoose.Schema({

  item: {
    id: Number,
    name: String,
    priceRange: String,
    itemType: String,
    imageURL: String,
    sizesUS: String,
    price: Number,
    color: String,
    detailImages: [String]
  }
});

const fecModel = mongoose.model('items', fecSchema);

module.exports = fecModel;