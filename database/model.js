const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/similar', { useNewUrlParser: true })
    .then(result => console.log('database connected!'))
    .catch(err => console.log('database connection error ', err));

const db = mongoose.connection;

const similarHomesSchema = new mongoose.Schema({
  unique_id: {type: String, index: true, unique: true, dropDups: true },
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

const deleteAll = () => {
  db.dropDatabase();
}

const fetchHomes = () => {
  return SimilarHome.find({}).limit(10);
}

module.exports.save = save;
module.exports.deleteAll = deleteAll;
module.exports.fetchHomes = fetchHomes;

