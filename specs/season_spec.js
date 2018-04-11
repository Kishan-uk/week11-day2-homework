const assert = require('assert');
const Season = require('../season.js');

describe('Season', function () {

  let season;

  beforeEach(function (){
    season = new Season(1, 180);
  });

  it('should have a number of seasons', function () {
    const result = season.number;
    assert.strictEqual(result, 1);
  });

  it('should have a duration', function () {
    const result = season.duration;
    assert.strictEqual(result, 180);
  });

});
