class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const node = new _Node();
    node.value = value;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return node;
    }

    if (this.tail === null) {
      this.tail = node;
      this.tail.prev = this.head;
      this.head.next = this.tail;
      this.length = 2;
      return node;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
    return node;
  }

  push(content) {
    this.add(content);
  }

  pop() {
    if (this.head === null) return null;

    if (this.head === this.tail) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }

    let oldTail = this.tail;
    let newTail = this.tail.prev;

    newTail.next = null;
    this.tail = newTail;
    this.length--;
  }

  dequeue() {
    if (this.head === null) return null;

    if (this.head === this.tail) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }

    let oldHead = this.head;
    this.head = this.head.next;

    this.length--;
    return oldHead;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  // O(1) operation since you are inserting at only 1 place,
  // the 1st position, regardless of the length of the list.

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  // Inserting at the end of the list requires
  // iterating over all of the nodes individually
  //  in sequence until you reach the end. O(n)

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  //You can see that the best-case performance is O(1),
  //and the average and worst cases are O(n)
  //due to finding the node that you want to remove.

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
}

module.exports = LinkedList;
