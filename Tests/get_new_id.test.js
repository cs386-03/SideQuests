const get_new_id = require('./get_new_id');
const logSpy = jest.spyOn(global.console, 'log');

var my_list = [4, 3, 5, 1, 2];

test('correct bool retured; correct console message', () => {

    // test: integer returned = largest value in list + 1
    expect(get_new_id(my_list)).toBe(6);

    // test: 1 console log with correct message
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("New ID created");
});