const findMaxNumber = (nums) => {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
};

const res = findMaxNumber([1, 15, 3, 4, 11, 12]);
console.log(res);
