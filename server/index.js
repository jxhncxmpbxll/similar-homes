const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/model.js');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/similar', (req, res) => {
  db.fetchHomes()
  .then(result => res.status(200).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});