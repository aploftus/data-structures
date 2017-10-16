var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.head = 0; // initialize to 0 to allow .size() to be O(1)
  someInstance.tail = 0; 
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail++] = value;
};

queueMethods.dequeue = function() {
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

queueMethods.size = function() {
  return this.tail - this.head;
};


