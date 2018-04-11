const assert = require('assert');
const Tvshow = require('../tvshow.js');

describe('TV show', function () {

  let tvshow;

  beforeEach(function (){
    tvshow = new Tvshow('Red Dwarf');
  });

  it('should have a name', function () {
    const result = tvshow.name;
    assert.strictEqual(result, 'Red Dwarf');
  });

  describe('seasons', function() {



  });

});
