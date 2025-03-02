export function isMorning(currentHour) {
  if (currentHour === undefined || currentHour === null) return false;

  return currentHour >= 6 && currentHour < 12;
}
