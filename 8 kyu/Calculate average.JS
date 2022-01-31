// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  if (array.length != 0) {
    let value = array.reduce((a, b) => a + b) / array.length
    return value
  } else {
    return 0
  }
}

