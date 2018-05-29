module.exports = {
  getBoolean: getBoolean,
  getFunction: getFunction,
  getNull: getNull,
  getNumber: getNumber,
  getObject: getObject,
  getString: getString
}

function getBoolean () {
  return false
}

function getFunction () {
  return getBoolean
}

function getNull () {
  return null
}

function getNumber () {
  return 11
}

function getObject () {
  return {}
}

function getString () {
  return 'anthny'
}