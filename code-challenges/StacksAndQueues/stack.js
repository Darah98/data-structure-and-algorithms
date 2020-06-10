'use strict';
const Node= require('./node.js');
class Stack {
  constructor() {
    this.storage = [];
    this.top = null;
  }
  peek() {
    try {
      if (this.storage.length === 0) {
        return 'Stack is Empty, Top is Null';
      }
      return this.top;
    } catch (err) {
      console.error(err);
    }
  }
  push(value) {
    try {
      const node = new Node(value);
      this.storage.unshift(node);
      this.top = node;
    } catch (err) {
      console.error(err);
    }
  }
  pop() {
    try {
      if (this.storage == 0) {
        throw 'Stack is Empty';
      }
      const removed = this.storage.shift();
      this.top = this.storage[0] ? this.storage[0] : null;
      return removed;
    } catch (err) {
      console.error(err);
    }
  }
  isEmpty() {
    try {
      if (this.storage.length) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  }
}
module.exports= Stack;
