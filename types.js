module.exports = {

  getBoolean,
  getFunction: getFunction
}

function getBoolean () {
  return (1 + 1 === 2)
}

function getFunction () {
  return getBoolean
}