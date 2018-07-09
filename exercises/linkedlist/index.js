// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
  constructor() {
    this.head = new Node();
    this.current = this.head;
  }

  /**
   * appends a node to the start of the list
   * @param {*} data
   */
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.current = this.head;
  }

  /**
   * returns the number of items in the linked list
   */
  size() {
      let size = 0;
      while(this.current.next !== null) {
        this.current = this.current.next;
        size++;
      }
      if(this.current.next === null) {
          return size;
      }
  }
}

module.exports = { Node, LinkedList };
