describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add string values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });
  
  it('should add number values to a set', function() {
    set.add(5);
    set.add(6);
    expect(set.contains(5)).to.equal(true);
    expect(set.contains(6)).to.equal(true);
  });
  
  it('should differentiate between strings, objects, and number values', function() {
    set.add(5);
    set.add('5');
    set.add([5]);
    set.add({5: 5});
    expect(set.contains(5)).to.equal(true);
    expect(set.contains('5')).to.equal(true);
    expect(set.contains([5])).to.equal(true);
    expect(set.contains({5: 5})).to.equal(true);
  });
  
  it('should add object values to a set', function() {
    set.add({'hello': 'world'});
    set.add([1, 2, 3]);
    expect(set.contains({'hello': 'world'})).to.equal(true);
    expect(set.contains([1, 2, 3])).to.equal(true);
    expect(set.contains([])).to.equal(false);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  
  it('should report if set contains a value', function() {
    set.add('Alan Chin');
    expect(set.contains('Alan Chin')).to.equal(true);
    expect(set.contains('Amy Loftus')).to.equal(false);
  });

});
