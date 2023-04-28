const totalPoints = require('./totalPoints');
const logSpy = jest.spyOn(global.console, 'log');

test('totalTasks goes up by 1; correct console log', () => {

  // test: totalTasks increases by 1
  expect(totalPoints(20,5)).toBe(25);

  // test: 1 console log with correct message
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith("total points ran");
});