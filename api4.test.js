const app = 'https://jsonplaceholder.typicode.com/';
const request = require("supertest");

describe('GET /users', function() {
  it('responds with json', function() {
    return request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
         expect(response.body.email).toEqual('foo@bar.com');
      })
  });
});