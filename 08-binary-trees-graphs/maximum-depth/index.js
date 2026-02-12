import { Node } from "../breadth-first-traversal/breadth-first-traversal.js";

const maximumDepth = (root) => {
  if (!root) return [];

  const leftDepth = maximumDepth(root.left);
  const rightDepth = maximumDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
};

const root = new Node("a");
const nodeB = new Node("b");
const nodeC = new Node("c");
const nodeD = new Node("d");
const nodeE = new Node("e");
const nodeF = new Node("f");

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.right = nodeF;

const res = maximumDepth(root);
console.log(res);
