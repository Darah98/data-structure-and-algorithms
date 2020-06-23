'use strict';
const Node = require('../StacksAndQueues/node.js');
const Stack = require('../StacksAndQueues/stack.js');
class PseudoQueue {
  constructor() {
    this.storage = [];
    this.front = this.storage[0];
  }
  enqueue(val) {
    try {
      const node = new Node(val);
      const stack = new Stack();
      stack.storage.push(node);
      this.storage.unshift(stack);
    } catch (err) {
      console.error(err);
    }
  }
  dequeue() {
    try {
      if (this.storage.length === 0) {
        return 'Queue is Empty';
      }
      const stack = new Stack();
      stack.storage.pop();
      const removed = this.storage.pop();
      return removed;
    } catch (err) {
      console.error(err);
    }
  }
}
module.exports= PseudoQueue;