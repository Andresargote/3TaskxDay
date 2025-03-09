import { getRandomNumber } from "../utils/getRandomNumber";

describe("getRandomNumber", () => {
  it("should return a number between 0 and 10", () => {
    const randomNumber = getRandomNumber(0, 10);

    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });
  it("should return a error if min and max are not numbers", () => {
    expect(() => getRandomNumber("a", "b")).toThrowError(
      "Both min and max must be numbers",
    );
  });
  if (
    ("should return a error if min is greater than max",
    () => {
      expect(() => getRandomNumber(10, 0)).toThrowError(
        "Min must be less than or equal to max",
      );
    })
  );
});
