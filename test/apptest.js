const assert = require('assert');
const app = require('../test'); // Assuming your Express app is in app.js
const request = require('supertest');

describe('API POST Request', () => {
  it('should return a success message for adding a task', (done) => {
    const requestData = { /* your request data */ };
    request(app)
      .post('/api/data')
      .send(requestData)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        try {
          assert.strictEqual(res.status, 200);
          assert.deepStrictEqual(res.body, { message: 'Success' });
          done();
        } catch (error) {
          done(error);
        }
      });
  });
});
