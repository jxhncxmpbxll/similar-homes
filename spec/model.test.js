const db = require('../database/model.js');

test('should return an array of fifteen results', async (done)=> {
  const results = await db.fetchHomes();

  expect(results.length).toEqual(15);
  done();
})