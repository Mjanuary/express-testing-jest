const request = require("supertest");
const app = require("../../server");
const { UserService } = require("../../service");

describe("Test users routes using mock functions", () => {
  const server = request(app);
	
	beforeAll(async () => {
		UserService.getUsers = jest.fn().mockResolvedValue([
      {
        username: 'mock',
        email: 'mock@user.com',
        name: 'Mockuser',
        createdAt: '2022-12-21T18:17:49.926Z',
      }
    ]);
  })

  describe("GET /users", () => {
    it("should return list of mocked users", (done) => {
      server
        .get("/users")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .end(async (err, result) => {
          if (err) {
            done(err);
          }
				  expect(result.body.length).toBe(1);
          expect(result.body[0].username).toBe('mock');
          expect(result.body[0].email).toBe('mock@user.com');
          expect(result.body[0].name).toBe('Mockuser');

          done();
        });
    });
  });
});
