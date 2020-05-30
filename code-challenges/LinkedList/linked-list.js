'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    try {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    } catch (err) {
      console.error(error);
    }
  }
  includes(value) {
    try {
      let currentValue = this.head;
      while (currentValue) {
        if (currentValue.value === value) {
          return true;
        }
        currentValue = currentValue.next;
      }
    } catch (err) {
      console.error(err);
    }
  }
  toString() {
    try {
      let currentValue = this.head;
      while (currentValue) {
        console.log(`{${currentValue.value}} -> `);
        currentValue = currentValue.next;
      }
    } catch (err) {
      console.error(err);
    }
  }
}
const list = new LinkedList();
list.insert('c');
list.insert('b');
list.insert('a');
list.includes('b');
list.toString();
console.log(list);
