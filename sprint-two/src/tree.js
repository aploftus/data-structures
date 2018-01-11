var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; // Is there value in making children a linked list instead?
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { // O(1)
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
};

treeMethods.contains = function(target) { // O(n)
  if (this.value !== target) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
  return true;
};

treeMethods.removeFromParent = function() { // O(nearly 1 relative to size of Whole Tree)
  if (this.parent !== null) {
    var siblings = this.parent.children;
    for (var i = 0; i < siblings.length; ++i) {
      if (siblings[i] === this) {
        siblings.splice(i, 1);
        break;
      }
    }
  }
  this.parent = null;
  return this;
};

treeMethods.traverse = function(callback) { // O(n);
  var queue = new Queue();
  queue.enqueue(this);
  
  while (queue.size() > 0) {
    var processed = queue.dequeue();
    callback(processed.value);
    if(processed.children.length > 0) {
      processed.children.forEach(function(child) {
        queue.enqueue(child);
      });
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
