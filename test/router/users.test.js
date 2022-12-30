const request = require("supertest");
const app = require("../../server");
const { UsersModel } = require("../../models");

describe("Test users routes", () => {
  const server = request(app);

  beforeAll(async () => {});
  afterAll(async () => {
    await UsersModel.deleteMany();
  });

  describe("/users", () => {
    it("should respond with data when user is created", (done) => {
      server
        .post("/users")
        .send({
          username: "james",
          email: "james@gmail.com",
          name: "NEW James",
        })
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .end(async (err, result) => {
          if (err) {
            done(err);
          }
          expect(typeof result.body.username).toBe("string");
          expect(typeof result.body.username).toBe("string");
          expect(typeof result.body.username).toBe("string");

          // Check data types
          expect(typeof result.body._id).toBe("string");
          expect(typeof result.body.email).toBe("string");
          expect(typeof result.body.name).toBe("string");
          expect(typeof result.body._id).toBe("string");

          // Check the values
          expect(result.body.username).toBe("james");
          expect(result.body.email).toBe("james@gmail.com");
          expect(result.body.name).toBe("NEW James");

          done();
        });
    });
  });
});
