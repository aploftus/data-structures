var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.head = -1;
  
  _.extend(someInstance, stackMethods);
  
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  ++this.head;
  this.storage[this.head] = value;
};

stackMethods.pop = function() {
  var tmp = this.storage[this.head];
  
  delete this.storage[this.head--];
  return tmp;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

