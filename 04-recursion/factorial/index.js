const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  if (num === 2) return 2;

  return num * factorial(num - 1);
};

const res = factorial(2);
console.log(res);
