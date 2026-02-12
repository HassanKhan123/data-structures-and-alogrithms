class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const isValidBst = (root) => {
  function isValidSubtree(node, min, max) {
    if (!node) return true;

    if (
      (min !== null && node.value <= min) ||
      (max !== null && node.value >= max)
    ) {
      return false;
    }

    return (
      isValidSubtree(node.left, min, node.value) &&
      isValidSubtree(node.right, node.value, max)
    );
  }

  return isValidSubtree(root, null, null);
};

const root = new Node(8);
const node4 = new Node(4);
const node10 = new Node(10);
const node2 = new Node(2);
const node6 = new Node(6);

root.left = node4;
root.right = node10;
node4.left = node2;
node4.right = node6;

const res = isValidBst(root);
console.log(res);
