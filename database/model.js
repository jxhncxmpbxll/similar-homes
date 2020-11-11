const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/similar');

const db = mongoose.connection;

let similarHomesSchema = mongoose.Schema({
  unique_id: {type: String, index: true, unique: true, dropDups: true },
  property_id: String,
  street_address: String,
  neighborhood: String,
  zipcode: Number,
  city: String,
  bedrooms: Number,
  bathrooms: Number,
  sqft: Number,
  publishDate: Date,
  price: Number,
  img_url: String
});

let SimilarHome = mongoose.model('SimilarHome', repoSchema);


