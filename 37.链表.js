class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of bounds');
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      const cur = this.getNode(this.size - 1);
      cur.next = node;
    }
    this.size++;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of bounds');
    }
    if (index === 0) {
      let cur = this.head;
      this.head = cur.next;
    } else {
      const pre = this.getNode(index - 1);
      pre.next = pre.next.next;
    }
    this.size--;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      throw new RangeError('Index out of bounds');
    }
    let node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const preNode = this.getNode(index - 1);
      node.next = preNode.next;
      preNode.next = node;
    }
    this.size++;
  }
  indexOf(value) {
    let cur = this.head;
    for (let i = 0; i < this.size; i++) {
      if (cur.value === value) return i;
      else cur = cur.next;
    }
    return -1;
  }
}

let ll = new LinkedList();
ll.append('a');
ll.append('b');
// ll.append(5);
ll.insert('c', 0);
ll.remove(0);

console.dir(ll, {depth: 10});
