'use strict';

const commonArray = [];

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    const result = [];
    const traverse = (node) => {
      result.push(node.value);
      hashmap.set(node.value, node.value)
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  inOrder() {
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      hashmap.set(node.value, node.value)
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  postOrder() {
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
      hashmap.set(node.value, node.value)
    }
    traverse(this.root);
    return result;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
one.left = two;
one.right = three;
three.right = four;
three.left = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
const firstTree = new BinaryTree(one);
console.log(firstTree);


const one2 = new Node(1);
const two2 = new Node(22);
const three2 = new Node(3);
const four2 = new Node(44);
const five2 = new Node(5);
const six2 = new Node(66);
const seven2 = new Node(7);
const eight2 = new Node(88);
const nine2 = new Node(9);
one2.left = two2;
one2.right = three2;
three2.right = four2;
three2.left = five2;
two2.left = six2;
six2.right = seven2;
seven2.left = eight2;
seven2.right = nine2;

const secondTree = new BinaryTree(one2);
console.log(secondTree);

class HashMap{
  constructor(size){
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key){
    console.log(key);
    const hashedKey = (key * 3) % this.size;
    return hashedKey;
  }

  set(key, value){
    const hashedKey = this.hash(key);
    if(!this.storage[hashedKey]){
      this.storage[hashedKey] = value;
    }
    else{
      commonArray.push(value)
    }
  }
}

const hashmap = new HashMap(4000);
console.log(commonArray);

function treeIntersection(firstTree, secondTree){
  firstTree.preOrder(); // you can also try with inOrder & postOrder methods
  secondTree.preOrder(); // you can also try with inOrder & postOrder methods
  return commonArray;
}

treeIntersection(firstTree, secondTree)
console.log('result' ,commonArray);
