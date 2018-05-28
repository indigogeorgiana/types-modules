module.exports = {
  callsFunction: function (fn) {
    fn()
  },

  callsProperty: function (obj) {
    obj.increment()
  }
}