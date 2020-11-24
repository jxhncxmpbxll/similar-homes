const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/similar', { useNewUrlParser: true })
    .then(result => console.log('database connected!'))
    .catch(err => console.log('database connection error ', err));

const db = mongoose.connection;

const similarHomesSchema = new mongoose.Schema({
  unique_id: {type: String, index: true, unique: true, dropDups: true },
  streetAddress: String,
  state: String,
  zipcode: String,
  neighborhood: String,
  city: String,
  bedrooms: Number,
  bathrooms: Number,
  sqft: Number,
  publishDate: Date,
  price: String,
  priceReduction: Boolean,
  onFavorites: Boolean,
  img_url: String
});

let SimilarHome = mongoose.model('SimilarHome', similarHomesSchema);


const save = (dataArr) => {
  SimilarHome.insertMany(dataArr);
}

const deleteAll = () => {
  db.dropDatabase();
}

const fetchHomes = () => {
  return SimilarHome.find({}).limit(15);
}

const addOrRemoveFavorite = (value) => {
  return SimilarHome.findByIdAndUpdate(value._id, value.onFavorites);
}


module.exports.save = save;
module.exports.deleteAll = deleteAll;
module.exports.fetchHomes = fetchHomes;
module.exports.addOrRemoveFavorite = addOrRemoveFavorite;