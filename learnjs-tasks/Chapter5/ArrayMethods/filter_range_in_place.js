function filterRangeInPlace(array, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value < a || value > b) {
      array.splice(i, 1);
      i--;
    }
  }
}