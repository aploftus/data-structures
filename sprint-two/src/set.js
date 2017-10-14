var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { // O(1)
  // on the key, prepend a prefix for each type
  var key = '' + typeof item + item;
  this._storage[key] = item;
};

setPrototype.contains = function(item) { // O(1)
  var key = '' + typeof item + item;
  return this._storage[key] !== undefined;
};

setPrototype.remove = function(item) { // O(1)
  var key = '' + typeof item + item;
  delete this._storage[key];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
