var Queue = function() {
  this.storage = {};
  this.head = -1;
  this.tail = -1;
};

Queue.prototype.enqueue = function(value) {
  if (this.size() === 0) {
    ++this.head;
  }
  ++this.tail;
  this.storage[this.tail] = value;
};

Queue.prototype.dequeue = function() {
  var tmp = this.storage[this.head];
  
  delete this.storage[this.head++];
  if (this.size() === 0) {
    this.head = -1;
    this.tail = -1;
  }
  return tmp;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
