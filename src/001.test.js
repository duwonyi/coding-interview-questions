function convertIntegerToStringWithoutLibs(num) {
  let result = ''
  extractNumber(num).forEach(i => result += convertDigitToString(i))
  return result
}

function convertDigitToString(digit) {
  const OFFSET = '0'.charCodeAt()
  const code = digit + OFFSET

  if (code === '0'.charCodeAt()) return '0'
  else if (code === '1'.charCodeAt()) return '1'
  else if (code === '2'.charCodeAt()) return '2'
  else if (code === '3'.charCodeAt()) return '3'
  else if (code === '4'.charCodeAt()) return '4'
  else if (code === '5'.charCodeAt()) return '5'
  else if (code === '6'.charCodeAt()) return '6'
  else if (code === '7'.charCodeAt()) return '7'
  else if (code === '8'.charCodeAt()) return '8'
  else if (code === '9'.charCodeAt()) return '9'
}

function extractNumber(num) {
  const extracted = []

  while (num !== 0) {
    extracted.push(num%10)
    num = Math.floor(num / 10);
  }
  return extracted.reverse()
}

test('Convert Integer to String', () => {
  expect(convertIntegerToStringWithoutLibs(123)).toBe("123")
  expect(convertIntegerToStringWithoutLibs(5679)).toBe("5679")
})

test('Extract Integer to Array', () => {
  expect(extractNumber(5)).toEqual([5]);
  expect(extractNumber(15)).toEqual([1, 5]);
  expect(extractNumber(135)).toEqual([1, 3, 5]);
  expect(extractNumber(2478)).toEqual([2, 4, 7, 8]);
})

test('Convert Digit to String', () => {
  expect(convertDigitToString(0)).toBe("0")
  expect(convertDigitToString(1)).toBe("1")
})
