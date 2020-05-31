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
      console.error(err);
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
      let strVal = '';
      while (currentValue) {
        strVal = strVal + `{${currentValue.value}} -> `;
        currentValue = currentValue.next;
      }
      console.log(strVal, currentValue);
    } catch (err) {
      console.error(err);
    }
  }
  append(value) {
    const node = new Node(value);
    let currentValue = this.head;
    while (currentValue.next) {
      currentValue = currentValue.next;
    }
    currentValue.next = node;
    return this;
  }
  insertBefore(value, newVal) {
    const node = new Node(newVal);
    let currentValue = this.head;
    if (currentValue.next.value === value) {
      node.next = currentValue;
    }
    return this;
  }
  insertAfter(value, newVal) {
    const node = new Node(newVal);
    let currentValue = this.head;
    if (currentValue.value === value) {
      node.next = currentValue.next;
      currentValue.next = node;
    }
    return this;
  }
  // delete(value) {
  //   const node = new Node(value);
  //   let currentValue = this.head;
  //   if (currentValue.value === value) {
  //   }
  // }
}
const list = new LinkedList();
list.insert('c');
list.insert('b');
list.append('a');
list.insertBefore('c', 'x');
list.insertAfter('b', 'y');
list.includes('b');
list.toString();
console.log(list);
