function getAngleBetweenAt3h15m() {
  const anglePerHour = 30
  const anglePerMin = 0.5

  return (anglePerHour * 3 + anglePerMin * 15) - anglePerHour * 3
}

test('Angle between hour and Minute(3:15)', () => {
  expect(getAngleBetweenAt3h15m()).toBe(7.5)
})
