var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.head = -1;
  someInstance.tail = -1;
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


