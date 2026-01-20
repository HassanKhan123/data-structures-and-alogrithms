const calculator = (num1, num2, operation) => {
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;

      break;
    case "-":
      result = num1 - num2;

      break;
    case "*":
      result = num1 * num2;

      break;
    case "/":
      result = num1 / num2;

      break;

    default:
      throw new Error("Invalid Operator");
  }

  return result;
};

const res = calculator(1, 1, "//");
console.log(res);
