export function getRandomNumber(min, max) {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Both min and max must be numbers");
  }

  if (min > max) {
    throw new Error("Min must be less than or equal to max");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
