const request = require("supertest");
const app = require("../../server");
const mockingoose = require('mockingoose');
const model = require("../../models/User.models");


describe("Test users routes using a mocked model", () => {
  const server = request(app);

  describe("GET /users", () => {
    const _doc = [
      {
      _id: '507f191e810c19729de860ea',
      name: 'name',
      email: 'name@email.com',
      },
      {
        _id: '507f191e810c19729de862ab',
        name: 'name 2',
        email: 'name2@email.com',
      }];

      it('should return the mocked users', (done) => {
      mockingoose(model).toReturn(_doc, 'find');

      server
        .get("/users")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .end(async (err, result) => {
          if (err) {
            done(err);
          }

          expect(result.body.length).toBe(2);
          expect(result.body[0].email).toBe('name@email.com');

          done();
        });
    });
  });
});
