var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = -1;

  // Implement the methods below
  someInstance.push = function(value) {
    ++head;
    storage[head] = value;
  };

  someInstance.pop = function() {
    if (someInstance.size === 0) {
      head = -1;
      return undefined;
    }
    var temp = storage[head];
    
    delete storage[head--]; // updates head
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
