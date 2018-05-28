module.exports = {
  callsFunction: function (fn) {
    fn()
  },

  callsProperty: function (obj) {
    obj.increment()
  },

  filter: function (arr, fn) {
   return arr.filter(fn) 
  },

  find: function (arr, fn) {
    return arr.find(fn)
  },

  map: function (arr, fn) {
    return arr.map(fn)
  }
}

