const { getPage } = require("../../utils/functions");

describe("It should return 44 when it receive getPage(12,4)", () => {
  const getPageResult = getPage(12, 4);
  it("should uptate a product.", () => {
    expect(getPageResult).toBe(44);
  });
});
