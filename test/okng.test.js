const assert = require("assert");

const okng = require("../src/index.ts");

describe("check okng.js", () => {
  it("allways true", () => {
    console.log(okng);
    assert.equal(true, okng(1));
  });

  it("allways false", () => {
    assert.equal(false, okng(0));
  });
});
