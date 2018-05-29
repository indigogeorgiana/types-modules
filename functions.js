module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty,
  callsPropertyB: callsPropertyB,
  filter: filter,
  find: find,
  map: map
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
  return arr.filter(fn)

}
function find (arr, fn) {
  return arr.find(fn)
}

function map (arr, fn) {
  return arr.map(fn)

}