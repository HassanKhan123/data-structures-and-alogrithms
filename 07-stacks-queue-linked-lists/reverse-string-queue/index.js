import { Queue } from "../queue.js";

const reverseString = (str) => {
  const queue = new Queue();

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  let reversedStr = "";

  while (!queue.isEmpty()) {
    reversedStr += queue.dequeue();
  }

  return reversedStr;
};

const res = reverseString("hassan");
console.log(res);
