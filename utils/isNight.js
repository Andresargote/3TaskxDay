export function isNight(currentHour) {
  if (currentHour === undefined || currentHour === null) return false;

  return currentHour >= 19 || currentHour < 6;
}
