module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty,
  callsPropertyB: callsPropertyB
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