const db = require('../database/model.js');

test('should return an array of ten results', async (done)=> {
  const results = await db.fetchHomes();

  expect(results.length).toEqual(10);
  done();
})