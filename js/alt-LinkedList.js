class ListNode {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}
