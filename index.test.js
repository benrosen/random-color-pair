const getColorPair = require("./index");

describe("The getColorPair function", () => {
  describe("response", () => {
    const response = getColorPair();

    it("should be defined.", () => {
      expect(response).toBeDefined();
    });

    describe("foreground color", () => {
      const { foregroundColor } = response;

      it("should be defined.", () => {
        expect(foregroundColor).toBeDefined();
      });
    });

    describe("background color", () => {
      const { backgroundColor } = response;

      it("should be defined.", () => {
        expect(backgroundColor).toBeDefined();
      });
    });
  });
});
