import { getMonthName } from "../utils/dates";

describe("getMonthName", () => {
  it("should return January when the month index is 0", () => {
    expect(getMonthName(0)).toBe("jan");
  });
  it("should return December when the month index is 11", () => {
    expect(getMonthName(11)).toBe("dec");
  });
  it("should return 'Invalid month' when the month index is out of range", () => {
    expect(getMonthName(-1)).toBe("Invalid month");
    expect(getMonthName(12)).toBe("Invalid month");
  });
});
