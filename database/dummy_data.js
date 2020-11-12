const faker = require('faker');
const db = require('../database/model.js');
const dataFormat = require('../helpers/dataFormat.js');




const populate = function() {

  const neighborhoods = ['Last Hearth', 'Crofter\'s Village', 'Hornwood', 'Wolfswood', 'Cerwyn'];

  const cities = ['Ramsgate', 'The Dreadfort', 'Winterfell', 'White Harbor', 'Barrowton'];

    for (let i = 0; i < 100; i++) {

    const fakeHome = {
      property_id: '',
      streetAddress: faker.address.streetAddress(),
      streetName: faker.address.streetName(),
      state: 'The North',
      zipcode: faker.address.zipCode(),
      neighborhood: neighborhoods[Math.random() * (neighborhoods.length - 1))],
      city: cities[Math.floor(Math.random() * (cities.length - 1))],
      bedrooms: Math.floor(Math.random() * 3),
      bathrooms: Math.floor(Math.random() * 5),
      sqft: (Math.random() * (2,100 - 600) + 600),
      publishDate: Date,
      price: '$' + numberWithCommas((Math.random() * (2740000 - 150000) + 150000)),
      img_url: ''
    }
  }
}