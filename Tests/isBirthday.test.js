const isBirthday = require('./isBirthday');
const logSpy = jest.spyOn(global.console, 'log');

const date = new Date();

test('correct bool retured; correct console message', () => {

  // test: totalTasks increases by 1
  expect(isBirthday("2000-03-26",date)).toBe(true);

  // test: 1 console log with correct message
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith("Happy Birthday!");
});