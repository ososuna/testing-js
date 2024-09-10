const Person = require('./06-person');

describe('Test for Person', () => {

  let person;

  beforeEach(() => {
    person = new Person('Oswaldo', 45, 1.7);
  });

  test('should return down', () => {
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});

