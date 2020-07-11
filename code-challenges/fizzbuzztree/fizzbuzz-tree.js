/* eslint-disable eqeqeq */

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    const result = [];
    const traverseThru = (node) => {
      result.push(node.value);
      if (node.left) traverseThru(node.left);
      if (node.right) traverseThru(node.right);
    }
    traverseThru(this.root);
    return result;
  }
  inOrder() {
    const result = [];
    const traverseThru = (node) => {
      if (node.left) traverseThru(node.left);
      result.push(node.value);
      if (node.right) traverseThru(node.right);
    }
    traverseThru(this.root);
    return result;
  }
  postOrder() {
    const result = [];
    const traverseThru = (node) => {
      if (node.left) traverseThru(node.left);
      if (node.right) traverseThru(node.right);
      result.push(node.value);
    }
    traverseThru(this.root);
    return result;
  }
  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    }
    let current = this.root;
    while (current.left || current.right) {
      current = current.left ? current.left : current.right;
    }
    current.left ? current.right = node : current.left = node;
    // const result= tree.preOrder();
    // result.push(node);
  }
}
const node = new Node(5);
const newtree = new BinaryTree(node);
newtree.add(15);
newtree.add(7);
newtree.add(3);
console.log(newtree)


function fizzBuzzTree(tree) {
  let current = tree.root;
  while (current.left || current.right) {
    if (current.value % 5 == 0 && current.value % 3 == 0) {
      current.value = 'FizzBuzz';
    } else if (current.value % 5 == 0) {
      current.value = 'Buzz';
    } else if (current.value % 3 == 0) {
      current.value = 'Fizz';
    } else {
      current.value = `${current.value}`;
    }
    current = current.left ? current.left : current.right;
  }
  return tree;
}
fizzBuzzTree(newtree);
