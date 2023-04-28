const bubbleSort = require('./bubbleSort');
const logSpy = jest.spyOn(global.console, 'log')

var my_list = [4, 3, 5, 1, 2];

test('correct bool retured; correct console message', () => {

    // test: bubbleSort returns sorted array
    expect(bubbleSort(my_list)).toStrictEqual([1, 2, 3, 4, 5]);

    // test: 1 console log with correct message
    expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith("Array sorted");
});