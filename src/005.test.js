function solveQuadraticEquation(a, b, c) {
  const result = []
  result.push((-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a))
  result.push((-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a))
  return result
}

function solveQuadraticEquationWithSubroutine(a, b, c) {
  const first = -1 * b
  const second = Math.sqrt(Math.pow(b, 2) - 4 * a * c)
  const third = 2 * a

  const plus = () => (first + second) / third
  const minus = () => (first - second) / third

  return [plus(), minus()]
}

test('Solve the quadratic formula', () => {
  expect(solveQuadraticEquation(2, 6, -20)).toEqual([2, -5])
  expect(solveQuadraticEquationWithSubroutine(2, 6, -20)).toEqual([2, -5])
})
