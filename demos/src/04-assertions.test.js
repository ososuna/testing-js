// matchers
test('test obj', () => {
  const data = { name: 'Oswaldo' };
  data.lastName = 'Osuna';
  expect(data).toEqual({ name: 'Oswaldo', lastName: 'Osuna' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Christoph').toMatch(/stop/);
});

test('array', () => {
  const data = [1, 2, 3, 4];
  expect(data).toContain(2);
});
