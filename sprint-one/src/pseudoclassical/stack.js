var Stack = function() {
  this.storage = {};
  this.head = -1;
};

Stack.prototype.push = function(value) {
  ++this.head;
  this.storage[this.head] = value;
};

Stack.prototype.pop = function() {
  var tmp = this.storage[this.head];
  
  delete this.storage[this.head--];
  return tmp;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


