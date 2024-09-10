const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 3 to equal 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('multiply 1 * 4 to equal 4', () => {
  expect(multiply(1, 4)).toBe(4);
});

test('should divide', () => {
  expect(divide(6, 3)).toBe(2);
  expect(divide(5, 2)).toBe(2.5);
});

test('should divide for zero', () => {
  expect(divide(6, 0)).toBeNull();
  expect(divide(5, 0)).toBeNull();
});
