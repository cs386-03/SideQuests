const User = require('./isBirthday');

// mock a User object
const mockUser = new User( 'John Doe', '1999-04-28' );

test('Correct bool value returned', () => {

  // call isBirthday method on the mock user object
  const result = mockUser.isBirthday();

  // test: method returns true
  expect(result).toBe(true);

});