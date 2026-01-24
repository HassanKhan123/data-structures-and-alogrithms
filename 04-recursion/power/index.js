const power = (base, exponent) => {
  if (exponent == 0) return 1;

  return base * power(base, exponent - 1);
};

const res = power(3, 4);
console.log(res);
