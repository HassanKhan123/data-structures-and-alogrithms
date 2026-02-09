import { Stack } from "../stack.js";

const reverseString = (str) => {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversedStr = "";

  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
};

const res = reverseString("hassan");
console.log(res);
