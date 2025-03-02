export function isNight(currentHour) {
  if (currentHour === undefined || currentHour === null) return false;

  return currentHour >= 18 || currentHour < 6;
}
