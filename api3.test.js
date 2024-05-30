const request = require("supertest");
// const app = require(process.env.SERVER_PATH);
const app = "https://jsonplaceholder.typicode.com/";

const NEW_USER_NAME = "bob zoe";
const assert = require("assert");

describe("API Test", function () {
  this.timeout("60000");

  it("API Test returns JSON with a list of users", function (done) {
    request(app)
      .get("/users")
      .expect(200)
      //   .expect("Content-Type", /json/)
      //   .expect([{"name":"john doe","id":1},{"name":"anna boe","id":2}])
      .end(function (err, res) {
        console.log(JSON.stringify(res));
        assert.deepStrictEqual(res.status, 200);
        // assert.ok(JSON.parse(res));
        // assert(res.text.hasOwnProperty('name'));
        // assert(res.text.hasOwnProperty('id'));
        assert.match(res.header.content-type, /json/);
        const users = res.text;
        // assert.equal(
        //   res.text,
        //   '[{"name":"john doe","id":1},{"name":"anna boe","id":2}]'
        // );
        assert.ok(Array.isArray(users));
        assert.equal(
          users,
          '[{"name":"john doe","id":1},{"name":"anna boe","id":2}]'
        );
        for(const user in users) {
            assert(user.hasOwnProperty('name'));
            assert(user.hasOwnProperty('id'));
          }
        assert.equal(users[0].name, 'john doe');
        assert.equal(users[0].id, '1');
        assert.equal(users[1].name, 'anna boe');
        assert.equal(users[1].id, '2');
        // assert(users[1].hasOwnProperty('name'));
        // assert(users[0].hasOwnProperty('id'));
        // assert(users[1].hasOwnProperty('id'));
        // if (err) done(err);
        if (err) throw err;
        done();
      });
  });

  it("API Test endpoint /new returns expected text", function (done) {
    request(app)
      .get("/new")
      .expect(201)
      .expect("Content-Type", /json/)
      //   .expect("welcome to the new page")
      .end(function (err, res) {
        console.log(JSON.stringify(res));
        assert.deepStrictEqual(res.status, 201);
        assert.match(res.header.content-type, /json/);
        assert(res.hasOwnProperty('text'));
        assert.equal(res.text, "welcome to the new page");
        if (err) throw err;
        done();
      });
    console.log("response");
  });

  it("API Test endpoint /nonexisting returns 404 status", function (done) {
    request(app)
      .get("/nonexisting")
      .expect(404)
      .end(function (err, res) {
        console.log(JSON.stringify(res));
        assert.deepStrictEqual(res.status, 404);
        if (err) throw err;
        done();
      });
  });

  it("API Test root path returns redirects", function (done) {
    request(app)
      .get("/")
      .expect(301)
      .end(function (err, res) {
        console.log(JSON.stringify(res));
        assert.deepStrictEqual(res.status, 301);
        if (err) throw err;
        done();
      });
  });

  it("API Test adding new user to the list", function (done) {
    request(app)
      .post("/users")
      .send({ name: NEW_USER_NAME })
      .expect(201)
      //   .expect(`${NEW_USER_NAME} has been added to the users list`)
      .end(function (err, res) {
        console.log(JSON.stringify(res));
        assert.deepStrictEqual(res.status, 201);
        assert.match(
          res.text,
          `${NEW_USER_NAME} has been added to the users list`
        );
        if (err) throw err;
        done();
      });
  });
});
