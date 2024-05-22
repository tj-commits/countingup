# Countingup
Countingup is a library that provides a Counter class to count up and down with customizations.
## Installation
Using npm:
```
$ npm install countingup
```

In Node.js
```javascript
const countingup = require('countingup')
```

# Counter class
The ``Counter`` class provides a tool to count numbers.

Initializing
```javascript
const Counter = countingup.Counter
const myCounter = new Counter()
```

Counting
```javascript
myCounter.count()
console.log(myCounter.getCurrentNumber()) // 1
```

Resetting
```javascript
myCounter.reset()
console.log(myCounter.getCurrentNumber()) // 0
```

# Bonus Features
Customizing the Increment
```javascript
myCounter.count()
console.log(myCounter.getCurrentNumber()) // 1
myCounter.count(3)
console.log(myCounter.getCurrentNumber()) // 4
```

Customizing the Direction

This allows you to change the direction so it counts down and subtracts
```javascript
myCounter.reset()
myCounter.count(5)
console.log(myCounter.getCurrentNumber()) // 5
myCounter.count(5, countingup.DIRECTION.REVERSE) // 0
```
By default it will be forwards (countingup.DIRECTION.FORWARDS)

Customizing the Starting Number

```javascript
const myCounter2 = new Counter(4)
console.log(myCounter2.getCurrentNumber()) // 4
myCounter2.reset(3)
console.log(myCounter2.getCurrentNumber()) // 3
```
