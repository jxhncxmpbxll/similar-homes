const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/model.js');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/similar-homes', (req, res) => {
  db.fetchSimilarHomes()
  .then(result => res.status(200).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
})

app.get('/api/new-listings', (req, res) => {
  db.fetchNewListings()
  .then(result => res.status(200).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
})

app.post('/api/similar-homes/favorites', (req, res) => {
  db.addOrRemoveFavorite(req.body)
  .then(result => res.status(400).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
