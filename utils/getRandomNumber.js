export function getRandomNumber(min, max) {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Both min and max must be numbers");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
