import { isNight } from "../utils/isNight";

describe("isNight", () => {
  it("returns true when hour is exactly 19", () => {
    const hour = 19;
    expect(isNight(hour)).toBe(true);
  });
  it("returns true when hour is exactly 5", () => {
    const hour = 5;
    expect(isNight(hour)).toBe(true);
  });
  it("returns false when hour is exactly 18", () => {
    const hour = 18;
    expect(isNight(hour)).toBe(false);
  });
  it("returns false when hour is exactly 6", () => {
    const hour = 6;
    expect(isNight(hour)).toBe(false);
  });
});
