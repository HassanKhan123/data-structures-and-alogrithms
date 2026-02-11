import { DoublyLinkedList } from "../doubly-linked-list.js";

const findPairSum = (nums, target) => {
  const seen = new DoublyLinkedList();

  for (const num of nums) {
    const complement = target - num;

    if (seen.contains(complement)) {
      return [complement, num];
    }

    seen.append(num);
  }

  return null;
};

const res = findPairSum([2, 6, 3, 8, 10, 5], 12);
console.log(res);
