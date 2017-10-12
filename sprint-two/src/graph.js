

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // O(1)
  this.nodes.push(node);
  this.edges.push([]);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // O(V)
  for (var i = 0; i < this.nodes.length; ++i) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // O(V + E)
  var index = this.nodes.indexOf(node);
  
  if (index > -1) {
    while (this.edges[index].length > 0) {
      this.removeEdge(node, this.edges[index][0]);
    }
    this.nodes.splice(index, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // O(V + E)
  var fromIndex = this.nodes.indexOf(fromNode);
  
  if (fromIndex > -1) {
    return this.edges[fromIndex].includes(toNode);
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // O(V)
  var fromIndex = this.nodes.indexOf(fromNode);
  var toIndex = this.nodes.indexOf(toNode);
  
  if (fromIndex > -1 && toIndex > -1) {
    this.edges[fromIndex].push(toNode);
    this.edges[toIndex].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { // O(V + E)
  var fromIndex = this.nodes.indexOf(fromNode);
  var toIndex = this.nodes.indexOf(toNode);
  
  if (fromIndex > -1 && toIndex > -1) {
    var edgeIndex = this.edges[fromIndex].indexOf(toNode);
    
    if (edgeIndex > -1) {
      this.edges[fromIndex].splice(edgeIndex, 1);
    }
    edgeIndex = this.edges[toIndex].indexOf(fromNode);
    
    if (edgeIndex > -1) {
      this.edges[toIndex].splice(edgeIndex, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // O(V)
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


