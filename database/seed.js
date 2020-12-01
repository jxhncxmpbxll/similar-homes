const faker = require('faker');
const db = require('./model.js');
const dataFormat = require('./utils/dataFormat.js')


const populate = function() {

  db.deleteAll();

  const dummyData = [];

  const neighborhoods = ['Last Hearth', 'Crofter\'s Village', 'Hornwood', 'Wolfswood', 'Cerwyn'];

  const cities = ['Ramsgate', 'Dreadfort', 'Winterfell', 'White Harbor', 'Barrowton'];

  const images = [
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/bernard-hermant-KqOLr8OiQLU-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/brett-jordan-Zjuvn60DXKg-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/brian-babb-XbwHrt87mQ0-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/designecologist-Ib_zdvEalGg-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/dillon-kydd-3Ignkeds3w8-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/erik-odiin-8L7GvIEJCi0-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/evan-dvorkin-YWDVrk4C6F0-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/fran-hogan-j9aikb6tv-M-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/gustavo-zambelli-nEvzSXBIhiU-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/hulki-okan-tabak-Nh0BgsygqlQ-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/jessica-furtney-YOoucEImrKw-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/nicolas-gonzalez-QjuJaMH1rEc-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/pixasquare-4ojhpgKpS68-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/ronnie-george-z11gbBo13ro-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/stephen-leonardi-XKIO6ZgCObo-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/stephen-leonardi-fFqqVSi96z0-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/taylor-simpson-DnZ-TNBNyTI-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/taylor-simpson-_pFtAOXw38c-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/taylor-simpson-b1V49UCV3Jw-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/taylor-simpson-jybWXT5mrlI-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/zane-lee--tdnW2eErTM-unsplash.jpg',
    'https://hrr49-fec.s3.us-east-2.amazonaws.com/images/fec-images-compressed/zane-lee-ECsnJcc0Dhs-unsplash.jpg'
  ]

  const priceChanges = ['+', '-', 'x', 'y', 'z']

    for (let i = 0; i < 100; i++) {

      const fakeHome = {
        streetAddress: faker.address.streetAddress(),
        state: 'CA',
        zipcode: faker.address.zipCode(),
        neighborhood: neighborhoods[Math.floor(Math.random() * (neighborhoods.length))],
        city: cities[Math.floor(Math.random() * (cities.length - 1))],
        bedrooms: Math.floor(Math.random() * (4 - 1) + 1),
        bathrooms: Math.floor(Math.random() * (3 - 1) + 1),
        sqft: Math.floor(Math.random() * (1400 - 500) + 500),
        publishDate: faker.date.past(1),
        price: dataFormat.formatPrice(Math.floor(Math.random() * (2740000 - 150000) + 150000)),
        priceChange: priceChanges[Math.floor(Math.random() * (priceChanges.length - 1))],
        onFavorites: false,
        img_url: images[Math.floor(Math.random() * (images.length))]
      }
    dummyData.push(fakeHome);
  }
   db.save(dummyData);
}

populate();