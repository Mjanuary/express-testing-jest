const { getPage } = require("../../utils/functions");

jest.mock('../../utils/functions');

describe("Test getPage using the manual mock method", () => {
  it("should return the mocked page number", () => {
      expect(getPage()).toBe(15);
  });
});
