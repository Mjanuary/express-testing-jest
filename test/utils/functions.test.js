const { getPage } = require("../../utils/functions");

describe("Testing getPage() function", () => {
  const getPageResult = getPage(12, 4);
  it("It should return 44 when it receive getPage(12,4)", () => {
    expect(getPageResult).toBe(44);
  });
});
