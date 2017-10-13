var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { // O = 1
    var temp = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = temp;
      list.tail = temp;
    } else {
      list.tail.next = temp;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() { // O = 1
    if (list.head === null && list.tail === null) {
      return undefined;
    }
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) { // O = n
    var temp = list.head;
    while (temp.value !== target) {
      temp = temp.next;
      if (temp == null) {
        return false;
      }
    }
    return true;
  };
  
  list.remove = function(target) {
    var curr = list.head;
    var subs = list.head.next;
    
    if (_.isEqual(curr.value, target)) {
      list.removeHead();
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
