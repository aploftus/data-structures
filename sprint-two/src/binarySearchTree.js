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
  this._updateHeight();
  if (this.parent) {
    return this.parent;
  } 
};

BinarySearchTree.prototype._updateHeight = function() {
  var leftHeight = this.left ? this.left.height : 0;
  var rightHeight = this.right ? this.right.height :0;
  this.height = Math.max(leftHeight, rightHeight) + 1;
  this._rebalance(leftHeight, rightHeight);
};

BinarySearchTree.prototype._rebalance = function(leftHeight, rightHeight) {
  var balanceFactor = leftHeight - rightHeight;
  // this only handles double rotations
  if (balanceFactor < -1) {
    // rotate to the left because right is too tall
    if (this.right.left) {
      this._rotateRight(this.right);
      this._rotateLeft(this);
    } else {
      this._rotateLeft(this);
    }
  }
  if (balanceFactor > 1) {
    // rotate to the right because left is too tall
    if (this.left.right) {
      this._rotateLeft(this.left);
      this._rotateRight(this);
    } else {
      this._rotateRight(this);
    }
  }
};

BinarySearchTree.prototype._rotateLeft = function(parent) {
  var oldParent = parent;
  var newParent = parent.right;
  newParent.parent = oldParent.parent;
  newParent.left = oldParent;
  // updates grandparent's child to be newparent
  if (oldParent.parent) {
    if (oldParent.parent.left === oldParent) {
      oldParent.parent.left = newParent
    } else {
      oldParent.parent.right = newParent;
    }
  }
  
  oldParent.parent = newParent;
  oldParent.right = null;
};

BinarySearchTree.prototype._rotateRight = function(parent) {
  var oldParent = parent;
  var newParent = parent.left;
  newParent.parent = oldParent.parent;
  newParent.right = oldParent;
  // updates grandparent's child to be newparent
  if (oldParent.parent) {
    if (oldParent.parent.left === oldParent) {
      oldParent.parent.left = newParent
    } else {
      oldParent.parent.right = newParent;
    }
  }
  
  oldParent.parent = newParent;
  oldParent.left = null;
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
