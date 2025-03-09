import { isEvening } from "../utils/isEvening";

describe("isEvening", () => {
  it("returns true when hour is exactly 12", () => {
    const hour = 12;
    expect(isEvening(hour)).toBe(true);
  });
  it("returns true when hour is exactly 18", () => {
    const hour = 18;
    expect(isEvening(hour)).toBe(true);
  });
  it("returns false when hour is exactly 11", () => {
    const hour = 11;
    expect(isEvening(hour)).toBe(false);
  });
  it("returns false when hour is exactly 19", () => {
    const hour = 19;
    expect(isEvening(hour)).toBe(false);
  });
});
