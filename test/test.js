const assert = require('assert');
const greet = require('../app');

describe('Greet Function', function () {
  it('should return correct greeting', function () {
    assert.strictEqual(greet(), 'Hello from JS!');
  });
});
