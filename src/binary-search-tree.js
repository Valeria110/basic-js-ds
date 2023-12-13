const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class NewElem {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new NewElem(data);
    } else {
      let current = this.rootNode;

      while(current) {
        if (current.data === data) {
          return current;
        }

        if (data < current.data) {
          if (!current.left) {
            current.left = new NewElem(data);
            return current.left;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = new NewElem(data);
            return current.right;
          }
          current = current.right;
        }
    }
    }
  }

  has(data) {
    if (!this.rootNode) {
      return false;
    }

    return contain(this.rootNode, data);

    function contain(currentNode, data) {
      if (!currentNode) {
        return false;
      } else if (currentNode.data === data) {
        return true;
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
        return contain(currentNode, data);
      } else {
        currentNode = currentNode.right;
        return contain(currentNode, data);
      }
    }
  }

  find(data) {
    if (!this.rootNode) {
      return null;
    }

    return includes(this.rootNode, data);

    function includes(current, data) {
      if (!current) {
        return null;
      }

      if (current.data === data) {
        return current;
      }

      if (data < current.data) {
        current = current.left;
        return includes(current, data);
      } else {
        current = current.right;
        return includes(current, data);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const myTree = new BinarySearchTree();
myTree.add(10);
myTree.add(6);
myTree.add(15);
myTree.add(9);
console.log(myTree.add(5))

module.exports = {
  BinarySearchTree
};