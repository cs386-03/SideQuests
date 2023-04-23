const totalTasks = require('./totalTasks');
const logSpy = jest.spyOn(global.console, 'log');

test('totalTasks goes up by 1; correct console log', () => {

  // test: totalTasks increases by 1
  expect(totalTasks(5)).toBe(6);

  // test: 1 console log with correct message
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith("total tasks ran");
});

