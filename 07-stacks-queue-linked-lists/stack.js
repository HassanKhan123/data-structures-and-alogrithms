class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = [];
    this.top = -1;
  }

  push(value) {
    if (this.isFull()) {
      return false;
    }
    this.top++;
    this.stack[this.top] = value;
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    this.top--;

    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.stack[this.top];
  }

  isFull() {
    return this.top === this.maxSize - 1;
  }

  isEmpty() {
    return this.top === -1;
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
console.log(stack.peek());

console.log(stack);
