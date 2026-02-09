const longestConsecutiveSequence = (numbers) => {
  const numSet = new Set(numbers);

  let longestSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
};

const res = longestConsecutiveSequence([100, 4, 200, 1, 3, 2]);
console.log(res);
