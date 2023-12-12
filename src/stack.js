const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class stackElem {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(name) {
    const newElem = new stackElem(name);

    if(!this.top) {
      this.top = newElem;
      this.length += 1;
    } else {
      newElem.next = this.top;
      this.top = newElem;
      this.length += 1;
    }
  }

  pop() {
    if(this.length === 0) {
      return null;
    } else {
      const deletedElem = this.top;

      this.top = deletedElem.next;
      this.length -= 1;

      return deletedElem.value;
    }
  }

  peek() {
    return this.top.value;
  }
}

const stack = new Stack();
stack.push(2);
stack.push('hello');
console.log(stack.peek());

module.exports = {
  Stack
};
