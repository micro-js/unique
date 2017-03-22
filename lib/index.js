/**
 * Expose unique
 */

module.exports = unique

/**
 * unique
 */

function unique (list, cmp) {
  cmp = cmp || defaultCmp

  var result = []

  for (var i = 0; i < list.length; i++) {
    var val = list[i]
    if (!contains(result, val, cmp)) {
      result.push(val)
    }
  }

  return result
}

function contains (list, val, cmp) {
  for (var i = 0; i < list.length; i++) {
    if (cmp(list[i], val)) {
      return true
    }
  }

  return false
}

function defaultCmp (a, b) {
  return a === b
}
