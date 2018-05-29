module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty,
  callsPropertyB: callsPropertyB,
  filter: filter,
  find: find
}

function callsFunction (increment) {
  increment()
}

function callsProperty (obj) {
  return obj.n++
}

function callsPropertyB (obj) {
  return obj.increment()
}

function filter (arr, fn) {
  const result = arr.filter(fn)
  return result
}

function find (arr, fn) {
  const result = arr.find(fn)
  return result
}