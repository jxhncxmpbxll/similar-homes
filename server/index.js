const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/model.js');
const helpers = require('../helpers/realtor.js');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});