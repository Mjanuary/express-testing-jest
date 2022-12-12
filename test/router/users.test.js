const request = require("supertest");
const app = require("../../server");
const { UsersModel } = require("../../models");

describe("Test authentication routes", () => {
  const server = request(app);

  beforeAll(async () => {});
  afterAll(async () => {
    await UsersModel.deleteMany();
  });

  describe("/users", () => {
    it("should respond with default auth object", (done) => {
      server
        .post("/users")
        .send({
          username: "Alice KEVIN",
          email: "jamesalice@gmail.com",
          names: "Alice New",
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
          expect(typeof result.body.names).toBe("string");
          expect(typeof result.body._id).toBe("string");

          expect(result.body.username).toBe("Alice KEVIN");
          expect(result.body.email).toBe("jamesalice@gmail.com");
          expect(result.body.names).toBe("Alice New");

          done();
        });
    });
  });
});
