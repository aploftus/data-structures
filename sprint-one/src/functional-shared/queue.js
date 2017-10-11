var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.head = -1;
  someInstance.tail = -1;
  
  _.extend(someInstance, queueMethods);
  
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (this.size() === 0) {
    ++this.head;
  }
  ++this.tail;
  this.storage[this.tail] = value;
};

queueMethods.dequeue = function() {
  var tmp = this.storage[this.head];
  
  delete this.storage[this.head++];
  if (this.size() === 0) {
    this.head = -1;
    this.tail = -1;
  }
  return tmp;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
