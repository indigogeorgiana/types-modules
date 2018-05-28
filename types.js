module.exports = {

  getBoolean,
  getFunction: getFunction,
  getNull: getNull,
  getNumber: getNumber
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