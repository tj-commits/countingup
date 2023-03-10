module.exports = mathUtils = {
  Counter: function Counter(base) {
    if (base == null || !Number.isFinite(base)) base = 0
    var counter = base
    this.reset = function(base) {
      if (base == null || !Number.isFinite(base)) base = 0
      counter = base
      return this
    }
    this.getCurrentNumber = function() {
      return counter
    }
    this.count = function(increment, direction) {
      if (increment == null) increment = 1
      if (direction == null) direction = 'forwards'
      if (!Number.isFinite(increment) || !Number.isInteger(increment)) {
        return console.error('Invalid increment')
      }
      switch (direction) {
        case 'forwards': {
          counter += increment
          return
        }
  
        case 'backwards' || 'reverse': {
          counter -= increment
          return
        }
  
        default: {
          return console.error('Invalid direction')
        }
      }
    }
  }
}
