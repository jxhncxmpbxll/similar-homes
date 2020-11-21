const app = require('../server/index.js');
const request = require('supertest');

jest.setTimeout(5000);


test('should respond with an array of objects', async (done) => {
  const res = await request(app).get('/api/similar-homes');
  const response = JSON.parse(res.text);
  const allObjects = response.every((item)=> typeof item === 'object');

  expect(res.status).toBe(200);
  expect(Array.isArray(response)).toEqual(true);
  expect(allObjects).toEqual(true);
  done();
})

test('response objects should contain all expected keys', async (done) => {
  const res = await request(app).get('/api/similar-homes');
  const response = JSON.parse(res.text);
  const responseKeys = Object.keys(response[0]);

  const sampleObj =   {
    "_id": "5fb34fef139c6029f4e12eaf",
    "streetAddress": "51659 Jenkins Mountain",
    "state": "The North",
    "zipcode": "68020",
    "neighborhood": "Hornwood",
    "city": "White Harbor",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 985,
    "publishDate": "2020-04-14T11:54:18.590Z",
    "price": 991899,
    "priceReduction": false,
    "onFavorites": true,
    "img_url": "https://hrr49-fec.s3.us-east-2.amazonaws.com/images/erik-odiin-8L7GvIEJCi0-unsplash.jpg",
    "__v": 0
  }

  const expected = Object.keys(sampleObj);

  expect(res.status).toBe(200);
  expect(responseKeys).toEqual(expected);
  done();
})




