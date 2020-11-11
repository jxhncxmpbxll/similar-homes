const axios = require('axios');


const getHome = function() {
  const options = {
    method: 'GET',
    url: 'https://realtor.p.rapidapi.com/properties/detail',
    params: {listing_id: '608763437', prop_status: 'for_sale', property_id: '4599450556'},
    headers: {
      'x-rapidapi-key': `${config.TOKEN}`,
      'x-rapidapi-host': 'realtor.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data); // <--- change this
  }).catch(function (error) {
    console.error(error);
  });
}


const getSimilarHomes = function() {
  const options = {
    method: 'GET',
    url: 'https://realtor.p.rapidapi.com/properties/v2/list-similar-homes',
    params: {property_id: '1170009314'},
    headers: {
      'x-rapidapi-key': `${config.TOKEN}`,
      'x-rapidapi-host': 'realtor.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data); //<--- change this
  }).catch(function (error) {
    console.error(error);
  });
}

module.exports.getHome = getHome;
module.exports.getSimilarHomes = getSimilarHomes;