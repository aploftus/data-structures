var Queue = function() {
  var someInstance = {};
  var storage = {};
  var head = 0; // initialize to 0 to allow .size() to be O(1)
  var tail = 0;

  someInstance.enqueue = function(value) {
    storage[tail++] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage[head];
    
    delete storage[head];

    if (someInstance.size()) {
      head++;
    } else { // reset to prevent integer overflow
      head = 0;
      tail = 0;
    }
    return temp;
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
