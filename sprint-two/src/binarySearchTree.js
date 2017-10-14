var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
  this.parent = null;
  this.height = 1;
};

BinarySearchTree.prototype.insert = function(value) { // O(log(n));
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
      this.left.parent = this;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
      this.right.parent = this;
    } else {
      this.right.insert(value);
    }
  }
  this.updateHeight();
  // if a node has no children, when we insert child,, we increment parent's height to 1
  // at grandparent, set height to greater of left.height and right.height;
  // recursively check all grandparents and update.
};

BinarySearchTree.prototype.updateHeight = function() {
  var leftHeight = this.left ? this.left.height : 0;
  var rightHeight = this.right ? this.right.height :0;
  this.height = Math.max(leftHeight, rightHeight) + 1;
  this.rebalance(leftHeight, rightHeight);
};

BinarySearchTree.prototype.rebalance = function(leftHeight, rightHeight) {
  var balanceFactor = leftHeight - rightHeight;
  // balance from bottom first
  // let's first deal with a simple rotation
  if (balanceFactor < -1) {
    // rotate to the left because right is too tall
    var oldParent = this;
    var newParent = this.right;
    newParent.parent = oldParent.parent;
    newParent.left = oldParent;
    oldParent.parent = newParent;
    oldParent.right = null;
    // this = newParent; // This severs the entire tree, rather than reassigning the Tree to start at newParent;
  }
  if (balanceFactor > 1) {
    // rotate to the rigth because left is too tall
    var oldParent = this;
    var newParent = this.left;
    newParent.parent = oldParent.parent;
    newParent.right = oldParent;
    oldParent.parent = newParent;
    oldParent.left = null;
    // this = newParent; // This severs the entire tree, rather than reassigning the Tree to start at newParent;
  }
};

BinarySearchTree.prototype.contains = function(value) { // O(log(n));
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);    
    }
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);    
    } 
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) { // O(n);
  callback(this.value);
  
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(callback) { // O(n)
  var queue = new Queue();
  
  queue.enqueue(this);
  
  while (queue.size() > 0) {
    var processed = queue.dequeue();
    callback(processed.value);
    if (processed.left) {
      queue.enqueue(processed.left);
    }
    if (processed.right) {
      queue.enqueue(processed.right);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
