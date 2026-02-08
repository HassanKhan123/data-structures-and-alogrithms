const twoSum = (nums, target) => {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numSet.has(complement)) {
      return [nums.indexOf(complement), i];
    }
    numSet.add(nums[i]);
  }

  return [];
};

const res = twoSum([3, 2, 4], 6);
console.log(res);
