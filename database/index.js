const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/backcountry', { useNewUrlParser: true });

var fecSchema = new mongoose.Schema({

  id: Number,
  name: String,
  priceRange: String,
  itemType: String,
  imageURL: String,
  sizes: [String],
  price: String,
  prevPrice: String,
  sale: String,
  color: String,
  detailImages: [String]

});

const Items = mongoose.model('items', fecSchema);

module.exports = Items;