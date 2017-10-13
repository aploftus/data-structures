

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) { // O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  // checking if a bucket has been created at index
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, LinkedList());
  }
  // checking if k/v already exists
  var bucket = this._storage.get(index);
  var current = bucket.head;
  
  // reassign new value
  while (current !== null) {
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
  this._rehash();
};

HashTable.prototype.retrieve = function(k) { //O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var current = bucket.head;
  
  while (current !== null) {
    if (current.value[0] === k) {
      return current.value[1];
    } else {
      current = current.next;
    }
  }
};

HashTable.prototype.remove = function(k) { // O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var current = bucket.head;
  var target = [k, this.retrieve(k)];
  
  while (current !== null) {
    if (current.value[0] === k) {
      bucket.remove(target);
      return;
    } else {
      current = current.next;
    }
  } 
};

HashTable.prototype.resize = function() {
  var oldStorage = this._storage;
  // for EACH index in old LimitedArray, call rehash
  var rehash = function(bucket) {
    var current = bucket.head;
    
    while (current !== null) {
      //insert(current.value[0])
    }
    // for each node in bucket
    // grab the key (node[0]), and rehash to new LimitedArray (node[0], node[1]);
    // use new hash to insert k/v pair in new LimitedArray
  };
  
  // when counter / limit > .75
    // double the limit
    // rehash every item
  if (this._counter / this._limit >= 0.75) {
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    oldStorage.each(rehash);
  }
   
    
  // when counter / limit < .25
    // halve the limit
    // rehash every item  
  if (this._counter / this._limit <= 0.25) {
    this._limit /= 2;
    this._storage = LimitedArray(this._limit);
    oldStorage.each(rehash);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


