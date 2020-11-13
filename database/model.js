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

module.exports.save = save;

