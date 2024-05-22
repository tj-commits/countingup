const DIRECTION = {
  FORWARDS: 'forwards',
  REVERSE: 'reverse'
}


function Counter(base) {
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
    if (direction == null) direction = DIRECTION.FORWARDS
    if (!Number.isFinite(increment) || !Number.isInteger(increment)) {
      return console.error('Invalid increment')
    }
    switch (direction) {
      case DIRECTION.FORWARDS: {
        counter += increment
        return
      }

      case DIRECTION.REVERSE: {
        counter -= increment
        return
      }

      default: {
        return console.error('Invalid direction')
      }
    }
  }
}

Counter.DIRECTION = DIRECTION
module.exports = countingup = {
  Counter
}
