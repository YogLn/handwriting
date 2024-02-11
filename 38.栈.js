class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return 'Underflow';
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

// console.log('stack', stack.peek());
console.log('stack', stack.pop());
console.log('stack', stack);
