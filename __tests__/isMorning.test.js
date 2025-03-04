import { isMorning } from "../utils/isMorning";

describe("isMorning", () => {
  it("returns true when hour is exactly 6", () => {
    const hour = 6;
    expect(isMorning(hour)).toBe(true);
  });
  it("returns true when hour is exactly 11", () => {
    const hour = 11;
    expect(isMorning(hour)).toBe(true);
  });
  it("returns false when hour is exactly 5", () => {
    const hour = 13;
    expect(isMorning(hour)).toBe(false);
  });
  it("returns false when hour is exactly 12", () => {
    const hour = 12;
    expect(isMorning(hour)).toBe(false);
  });
});
