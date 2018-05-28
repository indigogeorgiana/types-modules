module.exports = {

  getBoolean,
  getFunction: getFunction,
  getNull: getNull,
  getNumber: getNumber,
  getObject: getObject
}

function getBoolean () {
  return (1 + 1 === 2)
}

function getFunction () {
  return getBoolean
}

function getNull () {
  return null
}

function getNumber () {
  return 2
}

function getObject () {
  return {}
}