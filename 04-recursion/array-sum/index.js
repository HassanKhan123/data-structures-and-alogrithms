const arraySum = (nums) => {
  if (nums.length == 0) return 0;

  return nums[0] + arraySum(nums.slice(1));
};

const res = arraySum([1, 2, 3, 4, 5, 6]);
console.log(res);
