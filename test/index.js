/**
 * Imports
 */

var unique = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(unique([1,2,3,3]), [1,2,3])
  t.deepEqual(unique(['c', 'a', 'b', 'c',]), ['c', 'a', 'b'])
  t.deepEqual(unique([{a: 1}, {a: 1}], (a, b) => a.a === b.a), [{a: 1}])

  t.end()
})
