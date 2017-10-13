var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) { // O = 1
  var temp = new DoublyLinkedNode(value);
  // if list is empty, then head and tail updated to first and only node
  if (this.head === null && this.tail === null) {
    this.head = temp;
    this.tail = temp;
  } else {
    temp.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp;
  }
};

DoublyLinkedList.prototype.addToHead = function(value) {
  var temp = new DoublyLinkedNode(value);
  // if list is empty, then head and tail updated to first and only node
  if (this.head === null && this.tail === null) {
    this.head = temp;
    this.tail = temp;
  } else {
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
  }
};

DoublyLinkedList.prototype.removeHead = function() { // O = 1
  if (this.head === null && this.tail === null) {
    return undefined;
  }
  var temp = this.head.value;
  // if list contains one item, set head and tail to null
  // else set head to the next value and removes its prev node
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
  return temp;
};

DoublyLinkedList.prototype.removeTail = function() {
  if (this.head === null && this.tail === null) {
    return undefined;
  }
  var temp = this.tail.value;
  // if list contains one item, set head and tail to null
  // else set tail to the prev value and removes its next node
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  return temp;
};

DoublyLinkedList.prototype.contains = function(target) { // O = n
  var temp = this.head;
  while (temp.value !== target) {
    temp = temp.next;
    if (temp == null) {
      return false;
    }
  }
  return true;
};

DoublyLinkedList.prototype.remove = function(target) {
  var curr = this.head;
  var subs = this.head.next;
  
  if (_.isEqual(curr.value, target)) {
    this.removeHead();
    return;
  }
  
  while (subs !== null) {
    if (_.isEqual(subs.value, target)) {
      curr.next = subs.next;
      return;
    } else {
      curr = subs;
      subs = subs.next;
    }
  }
};

var DoublyLinkedNode = function(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
