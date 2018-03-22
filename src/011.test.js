function BinarySearch(arr, num) {
  let begin = 0
  let end = arr.length - 1
  let result

  while (end >= begin) {
    result = Math.floor((begin + end) / 2)

    if (num === arr[result]) {
      return result
    }

    if (num < arr[result]) {
      end = result - 1
    } else {
      begin = result + 1
    }

  }

  return -1
}

var binarySearch = function(array, value) {
  var guess,
    min = 0,
    max = array.length - 1

  while (min <= max) {
    guess = Math.floor((min + max) / 2)
    if (array[guess] === value) return guess
    else if (array[guess] < value) min = guess + 1
    else max = guess - 1
  }

  return -1
}

test('Binery Search', () => {
  expect(BinarySearch([1, 2, 3], 1)).toBe(0)
  expect(BinarySearch([1, 2, 3], 3)).toBe(2)
  expect(BinarySearch([1, 2, 3, 4], 1)).toBe(0)
  expect(BinarySearch([1, 2, 3, 5, 6, 7, 18], 18)).toBe(6)
  expect(BinarySearch([1, 2, 3, 5, 6, 7, 18], 17)).toBe(-1)
})
