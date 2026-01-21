const findMissingNumber = (nums) => {
  if (nums.length == 0) return 1;

  const n = nums.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  //   let sum = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     sum += nums[i];
  //   }

  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  return expectedSum - sum;
};

const res = findMissingNumber([1, 2, 3, 4, 5, 7]);
console.log(res);
