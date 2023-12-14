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

  remove(data) {
    if (!this.has(data)) {
      return null;
    } else if (!this.rootNode) {
      return null;
    }

    this.rootNode = removeNodeFromTree(this.rootNode, data);

    function removeNodeFromTree(current, data) {
      if (!current) {
         return null;
      }

      if (data < current.data) {
        current.left = removeNodeFromTree(current.left, data);
        return current;
      } else if(data > current.data) {
        current.right = removeNodeFromTree(current.right, data);
        return current;
      } else if (current.data === data){
          if (!current.left & !current.right) {
            return null;
          } else if (!current.left) {
            current = current.right;
            return current;
          } else if (!current.right) {
            current = current.left;
            return current;
          }

          let min = current.right;
          while (min.left) {
            min = min.left;
          }
          current.data = min.data;
          current.right = removeNodeFromTree(current.right, min.data);

          return current;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    } else if (!this.rootNode.left) {
      return this.rootNode.data;
    }

    let min = this.rootNode;
    while(min.left) {
      min = min.left
    }

    return min.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    } else if (!this.rootNode.right) {
      return this.rootNode.data;
    }

    let max = this.rootNode;
    while(max.right) {
        max = max.right;
    }

    return max.data;
  }
}

// const myTree = new BinarySearchTree();
// myTree.add(10);
// myTree.add(6);
// myTree.add(15);
// myTree.add(9);
// myTree.add(5);
// myTree.add(3);
// console.log(myTree.min())

module.exports = {
  BinarySearchTree
};