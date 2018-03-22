function reverseString(str) {
  let reverse = ''
  for (let i = str.length - 1; i > -1; i--) {
    reverse += str[i]
  }
  return reverse
}

test('Reverse String', () => {
  expect(reverseString('reverse')).toBe('esrever');
})
