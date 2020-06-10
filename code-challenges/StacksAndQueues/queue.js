'use strict';
const Node = require('./node.js');
class Queue {
  constructor() {
    this.storage = [];
    this.front = null;
  }
  peek() {
    try {
      if (this.storage.length === 0) {
        return 'Queue is Empty, Front is Null';
      } else {
        return this.front;
      }
    } catch (err) {
      console.error(err);
    }
  }
  enqueue(value) {
    try {
      const node = new Node(value);
      this.storage.unshift(value);
      this.front = node;
    } catch (err) {
      console.error(err);
    }
  }
  dequeue() {
    try {
      return (removed = this.storage.pop());
    } catch (err) {
      console.error(err);
    }
  }
  isEmpty() {
    try {
      if (this.storage.length) return false;
      return true;
    } catch (err) {
      console.error(err);
    }
  }
}
module.exports= Queue;