var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { // O(1)
    var newTail = Node(value);

    if (list.head && list.tail) {
      list.tail.next = newTail;
      list.tail = list.tail.next;
    } else {
      list.head = newTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function() { // O(1)
    var oldHead;
    if (list.head) {
      oldHead = list.head.value;
      list.head = list.head.next;
    }
    return oldHead;
  };

  list._search = function(target, ifFound, ifNotFound) { // O(n);
    var current = list.head;
    var subs = list.head.next;

    if (_.isEqual(current.value, target)) {
      return ifFound(current, subs);
    }

    while (subs !== null) {
      if (_.isEqual(subs.value, target)) {
        return ifFound(current, subs);
      } else {
        current = subs;
        subs = subs.next;
      }
    }
    return ifNotFound ? ifNotFound() : undefined;
  };

  list.contains = function(target) { // O(n)
    var found = function() {
      return true;
    };
    var notFound = function() {
      return false;
    };

    return list._search(target, found, notFound);
  };
  
  list.remove = function(target) { // O(n);
    var found = function(current, subs) {
      current.next = subs ? subs.next : null;
      return subs;
    };

    return list._search(target, found);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
