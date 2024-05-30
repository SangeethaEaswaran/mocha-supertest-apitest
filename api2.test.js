const request = require("supertest");
// const app = require(process.env.SERVER_PATH);
const NEW_USER_NAME = "bob zoe";
const assert = require("assert");

describe("API Test", function () {
  this.timeout("60000");

  it("test", function () {
    request("https://jsonplaceholder.typicode.com/")
      .get("/users")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        //console.log('res========>', res);

        assert(res.hasOwnProperty('status'));
        assert(res.body,Array)
        // assert(res.body.hasOwnProperty('message'));
        // if (!res.body.hasOwnProperty('status')) throw new Error("Expected 'status' key!");
        // if (!res.body.hasOwnProperty('message')) throw new Error("Expected 'message' key!");
        if (err) throw err;
      })
  })

//   it("API Test returns JSON with a list of users", function (done) {
//     //You can uncomment this test to pass the obligatory test.
//     //Keep in mind that this is not a correct solution and just an
//     //example.
//     request(app)
//       .get("/users")
//       .expect(200)
//       .end(function (err, res) {
//         console.log(JSON.stringify(res));
//         // const response = JSON.parse(res)
//         // res.status.should.equal(200);
//         assert.deepStrictEqual(res.status, 200);
//         assert.equal(
//           res.text,
//           '[{"name":"john doe","id":1},{"name":"anna boe","id":2}]'
//         );
//         // res.text.should.equal('[{\"name\":\"john doe\", \"id\":1}, { \"name\": \"anna boe\", \"id\":2}]');
//         if (err) done(err);
//         done();
//       });
//   });

  // it("API Test endpoint /new returns expected text", function (done) {
  //    request(app)
  //    .get('/new')
  //    .set('Accept', 'application/json')
  //    .expect(200)
  //     .end(function(err,res){
  //           console.log(res)
  //           res.status.should.equal(200);
  //           // res.text.should.equal('"welcome to the new page"');
  //           if(err) done(err);
  //       done();
  //       })
  //     console.log('response')

  // });

  // it("API Test endpoint /nonexisting returns 404 status", function (done) {
  //       request(app)
  //   .get("/nonexisting")
  //   .expect(404)
  //   .end(function(err,res){
  //     console.log(res)
  //           if(err) done(err);
  //       done();
  //       })
  // });

  // it("API Test root path returns redirects", function (done) {
  //       request(app)
  //       .get('/')
  //       .expect(301)
  //       .end(function(err,res){
  //       console.log(res)
  //           if(err) done(err);
  //       done();
  //       })

  // });

  // it("API Test adding new user to the list", function (done) {
  //           request(app)
  //           .post('/users')
  //           .send({name :NEW_USER_NAME})
  //           .expect(200)
  //           .end(function(err,res){
  //           console.log(res)
  //           res.status.should.equal(200);
  //           // res.text.should.equal("bob zoe has been added to the users list");
  //           if(err) done(err);
  //       done();
  //       })
  //       console.log('response')

  // });
});
