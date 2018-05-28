module.exports = {

  getBoolean,
  getFunction: getFunction,
  getNull: getNull
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

