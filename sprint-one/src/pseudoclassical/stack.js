var Stack = function() {
  this.storage = {};
  this.head = 0; // initialize to 0 so .size() runs in O(1)
};

Stack.prototype.push = function(value) {
  this.storage[++this.head] = value;
};

Stack.prototype.pop = function() {
  var tmp = this.storage[this.head];
  
  delete this.storage[this.head];
  this.head > 0 ? this.head-- : this.head = 0;
  return tmp;
};

Stack.prototype.size = function() {
  return this.head;
};


