const faker = require('faker');
const db = require('./model.js');
const dataFormat = require('../helpers/dataFormat.js');


const populate = function() {

  db.deleteAll();

  const dummyData = [];

  const neighborhoods = ['Last Hearth', 'Crofter\'s Village', 'Hornwood', 'Wolfswood', 'Cerwyn'];
  const cities = ['Ramsgate', 'Dreadfort', 'Winterfell', 'White Harbor', 'Barrowton'];
  const images = [
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/designecologist-Ib_zdvEalGg-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/dillon-kydd-3Ignkeds3w8-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/erik-odiin-8L7GvIEJCi0-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fran-hogan-j9aikb6tv-M-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/gustavo-zambelli-nEvzSXBIhiU-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/hulki-okan-tabak-Nh0BgsygqlQ-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/jessica-furtney-YOoucEImrKw-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/nicolas-gonzalez-QjuJaMH1rEc-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/pixasquare-4ojhpgKpS68-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/ronnie-george-z11gbBo13ro-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/stephen-leonardi-fFqqVSi96z0-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/taylor-simpson-_pFtAOXw38c-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/taylor-simpson-b1V49UCV3Jw-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/taylor-simpson-DnZ-TNBNyTI-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/taylor-simpson-jybWXT5mrlI-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/zane-lee--tdnW2eErTM-unsplash.jpg'
  ]

    for (let i = 0; i < 100; i++) {

      const fakeHome = {
        streetAddress: faker.address.streetAddress(),
        streetName: faker.address.streetName(),
        state: 'The North',
        zipcode: faker.address.zipCode(),
        neighborhood: neighborhoods[Math.floor(Math.random() * (neighborhoods.length))],
        city: cities[Math.floor(Math.random() * (cities.length - 1))],
        bedrooms: Math.floor(Math.random() * (4 - 1) + 1),
        bathrooms: Math.floor(Math.random() * (3 - 1) + 1),
        sqft: Math.floor(Math.random() * (1400 - 500) + 500),
        publishDate: faker.date.past(1),
        price: Math.floor(Math.random() * (2740000 - 150000) + 150000),
        priceReduction: faker.random.boolean(),
        img_url: images[Math.floor(Math.random() * (images.length))]
      }
    dummyData.push(fakeHome);
  }
   db.save(dummyData);
}

populate();