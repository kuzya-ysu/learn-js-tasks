function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let result = now - today;
  return Math.round(result / 1000);
}