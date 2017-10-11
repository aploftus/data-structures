var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = -1;
  var tail = -1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (someInstance.size() === 0) {
      head = 0;
    }
    ++tail;
    storage[tail] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage[head];
    
    delete storage[head];
    if (someInstance.size() === 0) {
      head = -1;
      tail = -1;
    } else {
      head++;
    }
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
