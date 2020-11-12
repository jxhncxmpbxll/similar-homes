const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/similar', { useNewUrlParser: true });

const db = mongoose.connection;

let similarHomesSchema = mongoose.Schema({
  unique_id: {type: String, index: true, unique: true, dropDups: true },
  property_id: String,
  streetAddress: String,
  streetName: String,
  state: String,
  zipcode: String,
  neighborhood: String,
  city: String,
  bedrooms: Number,
  bathrooms: Number,
  sqft: Number,
  publishDate: Date,
  price: Number,
  img_url: String
});

let SimilarHome = mongoose.model('SimilarHome', similarHomesSchema);


const save = (dataArr) => {
  SimilarHome.insertMany(dataArr);
}

module.exports.save = save;

