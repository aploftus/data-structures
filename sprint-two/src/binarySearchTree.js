var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) { // O(log(n));
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
