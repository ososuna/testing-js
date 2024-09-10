describe('Group 1', () => {

  // Runs before every tests
  beforeAll(() => {
    console.log('beforeAll');
    // start db
  });

  // Runs after every tests
  afterAll(() => {
    console.log('afterAll');
    // stop db
  });

  // Runs before for every test case
  beforeEach(() => {
    console.log('beforeEach');
  });

  // Runs after for every test case
  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('Group 2', () => {

    // Runs before every tests
    // For scope of Group 2
    beforeAll(() => {
      console.log('beforeAll');
      // start db
    });

    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });


});
