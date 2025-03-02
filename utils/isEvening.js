export function isEvening(currentHour) {
  if (currentHour === undefined || currentHour === null) return false;

  return currentHour >= 12 && currentHour <= 18;
}
