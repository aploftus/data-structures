var Stack = function() {
  var someInstance = {};
  var storage = {};
  var head = 0; // initialize to 0 so .size() runs in O(1)

  someInstance.push = function(value) {
    storage[++head] = value;
  };

  someInstance.pop = function() {
    var temp = storage[head];
    
    delete storage[head--];
    if (head < 0) {
      head = 0;
    }
    // head > 0 ? head-- : head = 0;
    return temp;
  };

  someInstance.size = function() {
    return head;
  };

  return someInstance;
};
