const sumOfEvenSquares = (nums) => {
  const sumSqEvens = nums
    .filter((num) => num % 2 == 0)
    .map((num) => num ** 2)
    .reduce((total, num) => total + num, 0);

  return sumSqEvens;
};

const res = sumOfEvenSquares([1, 2, 3, 4, 5, 6]);
console.log(res);
