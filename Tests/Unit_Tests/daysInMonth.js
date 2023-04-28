function daysInMonth(month, year)
{
    var d = new Date(year, month+1, 0);
    console.log("Days In Month Calculated");
    return d.getDate();

}

module.exports = daysInMonth;