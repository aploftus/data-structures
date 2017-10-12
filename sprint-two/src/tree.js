var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { // O(1)
  var newChild = Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
