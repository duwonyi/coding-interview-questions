function checkPalindrome(str) {}

function palindrome(str) {
  str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
  let len = str.length
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }
  return true
}
test('Check palindrome', () => {
  expect(palindrome('A man, a plan, a canal. Panama')).toBe(true)
  expect(palindrome('race car')).toBe(true)
  expect(palindrome('nurses run')).toBe(true)
  expect(palindrome('maam')).toBe(true)
})
