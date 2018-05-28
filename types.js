module.exports = {

  getBoolean,
  getFunction: getFunction,
  getNull: getNull,
  getNumber: getNumber,
  getObject: getObject,
  getString: getString
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

function getString () {
  return 'I am Foo'
}
