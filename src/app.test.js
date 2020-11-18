const { sum } = require("./app");

describe("App functions", () => {
  test("it should sum all function arguments", () => {
    const firstSummand = 2;
    const secondSummand = 5;
    const thirdSummand = 0;
    const expected = 7;

    const result = sum(firstSummand, secondSummand, thirdSummand);

    expect(result).toEqual(expected);
  });
});
