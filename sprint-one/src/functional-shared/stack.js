var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.head = 0; // initialize to 0 so .size() runs in O(1)
  
  _.extend(someInstance, stackMethods);
  
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[++this.head] = value;
};

stackMethods.pop = function() {
  var tmp = this.storage[this.head];
  
  delete this.storage[this.head];
  this.head > 0 ? this.head-- : this.head = 0;
  return tmp;
};

stackMethods.size = function() {
  return this.head;
};

