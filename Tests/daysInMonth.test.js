const daysInMonth = require('./daysInMonth');
const logSpy = jest.spyOn(global.console, 'log');

test('correct integer returned; correct console message displayed', () => {

    // test: correct days in month calaculated and returned
    // february - 0 indexed
    expect(daysInMonth(1, 2021)).toBe(28);
    expect(daysInMonth(1, 2020)).toBe(29);

    // test: 1 console log with correct message
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith("Days In Month Calculated");

});