function getMaxSubSum(array) {
  let maxSum = 0;
  let currentSum = 0;

  for (let item of array) {
    currentSum += item;
    maxSum = Math.max(currentSum, maxSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}