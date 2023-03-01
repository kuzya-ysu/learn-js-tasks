function getSecondsToday() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let result = tomorrow - now;
  return Math.round(result / 1000);
}