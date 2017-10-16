var Queue = function() {
  this.storage = {};
  this.head = 0; // initialize to 0 to allow .size() to be O(1)
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail++] = value;
};

Queue.prototype.dequeue = function() {
  var tmp = this.storage[this.head];
  
  delete this.storage[this.head];
  if (this.size()) {
    this.head++;
  } else { // reset to prevent integer overflow
    this.head = 0;
    this.tail = 0;
  }
  return tmp;
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};
