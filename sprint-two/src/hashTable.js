var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) { // O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create an empty bucket if it hasn't been created yet
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index, LinkedList());
  }
  bucket = this._storage.get(index);
  var current = bucket.head;
  
  // reassign new value to existing key
  while (current) {
    if (current.value[0] === k) {
      current.value[1] = v;
      return;
    } else {
      current = current.next;
    }
  }
  // if doesn't already exist, stores k/v tuple in bucket
  this._storage.get(index).addToTail([k, v]);
  ++this._counter;
  this.grow();
};

HashTable.prototype.retrieve = function(k) { //O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if (bucket) {
    var current = bucket.head;
    
    while (current) {
      if (current.value[0] === k) {
        return current.value[1];
      } else {
        current = current.next;
      }
    }
  }
};

HashTable.prototype.remove = function(k) { // O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var current = bucket.head;
  var target = [k, this.retrieve(k)];
  
  while (current) {
    if (current.value[0] === k) {
      bucket.remove(target);
      --this._counter;
      this.shrink();
      return;
    } else {
      current = current.next;
    }
  }
};

HashTable.prototype.grow = function() {
  if (this._counter / this._limit > 0.75) {
    var oldStorage = this._storage;
  
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    this._counter = 0;
    oldStorage.each(this.rehash.bind(this));
  }
};

HashTable.prototype.shrink = function() {
  if (this._counter / this._limit < 0.25) {
    var oldStorage = this._storage;
 
    this._limit /= 2;
    this._storage = LimitedArray(this._limit);
    this._counter = 0;
    oldStorage.each(this.rehash.bind(this));
  }
};

HashTable.prototype.rehash = function(bucket) {
  if (bucket) {
    var current = bucket.head;
    
    while (current) {
      this.insert(current.value[0], current.value[1]);
      current = current.next;
    }
    
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


