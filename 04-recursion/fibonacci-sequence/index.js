const fibonacci = (num) => {
  if (num < 2) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

const res = fibonacci(8);
console.log(res);
