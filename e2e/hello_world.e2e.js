import { expect } from "chai";
import testUtils from "./utils";

describe("application launch", () => {
  beforeEach(testUtils.beforeEach);
  afterEach(testUtils.afterEach);

  it("root component is mounted", function() {
    return this.app.client.getText("#root").then(text => {
      console.log(text)
      expect(text).to.be.a("array");
    });
  });
});
