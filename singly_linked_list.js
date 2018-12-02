class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length ++;
    return this;
  }

  pop() {
    if (!this.head) return false;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length --;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return false;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length --;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length ++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return false;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      counter ++;
      current = current.next;
    }
    console.log('GET: ', current);
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if(foundNode) {
      foundNode.val = val;
      return foundNode;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let previousNode = this.get(index - 1);
    let temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length ++;
    return true;
  }

  remove(index) {
    if (index <0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length --;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    let index = 0;
    while(index < this.length) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      index ++;
    }
    return this;
  }

}

const list = new SinglyLinkedList();

list.push('ONE')
list.push('TWO')
list.push('TREE')

list.reverse();

console.log(list);

