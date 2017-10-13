var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
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

treeMethods.removeFromParent = function() {
  // dissociate a tree from its parent (and a parent from its child)
  // access parent using tree.parent
  
  if (this.parent !== null) {
    var siblings = this.parent.children;
    for (var i = 0; i < siblings.length; ++i) {
      if (siblings[i] === this) {
        siblings.splice(i, 1);
        break;
      }
    }
    // traverse array looking for 'this' (itself)
    // grab the index of self ('this')
    // siblings.splice(index, 1);
  }
  this.parent = null;
 
  // remove child from parent
   // set tree.parent (of a child) to null (break connection of)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
