const slidingWindow = (arr, k) => {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  currentSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

const res = slidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
console.log(res);
