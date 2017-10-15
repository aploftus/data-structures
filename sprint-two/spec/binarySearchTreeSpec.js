describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.right.value).to.equal(8);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog" on the left branch first', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7, 8]);
  });
  
  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 3, 8]);
  });
  
  it('should update grandparent height when grandchild is added', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    expect(binarySearchTree.height).to.eql(3);
  });
  
  it('should rebalance when height difference of two branches is greater than 1 or less than -1', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree = binarySearchTree.insert(6) || binarySearchTree;
    binarySearchTree = binarySearchTree.insert(7) || binarySearchTree;
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([6, 5, 7]);
  });
  
  it('should rebalance with double rotation', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree = binarySearchTree.insert(1) || binarySearchTree;
    binarySearchTree = binarySearchTree.insert(3) || binarySearchTree;
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([3, 1, 5]);
  });

});
