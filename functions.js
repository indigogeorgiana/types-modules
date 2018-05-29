module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty,
  filter: filter,
  find: find,
  map: map
}

function callsFunction (fn) {
  fn()
}

function callsProperty (obj) {
  obj.increment()
}

function filter (arr, fn) {
 return arr.filter(fn) 
}

function find (arr, fn) {
  return arr.find(fn)
}

function map (arr, fn) {
  return arr.map(fn)
}

