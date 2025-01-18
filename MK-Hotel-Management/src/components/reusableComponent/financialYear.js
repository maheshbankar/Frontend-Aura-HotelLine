export const financialYear = (finYear, month, year) => {

    const monthMap = {
        'January': '01',
        'February': '02',
        'March': '03',
        'April': '04',
        'May': '05',
        'June': '06',
        'July': '07',
        'August': '08',
        'September': '09',
        'October': '10',
        'November': '11',
        'December': '12'
    };

    const parts = finYear.split('-');
    const convertedMonth = parts.map(part => monthMap[part]).join('-');

    const mn = convertedMonth.split('-');
    const finYearMonth = mn[0];
    const selectedMonth = month + 1;

    let prevYear;
    let currYear;

    if (finYear === 'January-December') {
        prevYear = year;
        currYear = year;
    } else {
        if (selectedMonth < finYearMonth) {
            prevYear = year - 1;
            currYear = year;
        } else {
            prevYear = year;
            currYear = year + 1;
        }
    }

    // Extract the last two digits of the years
    const prevYearLastTwoDigits = (prevYear % 100).toString().padStart(2, '0');
    const currentYearLastTwoDigits = (currYear % 100).toString().padStart(2, '0');

    // Construct the financial year string
    const financialYearString = `${prevYearLastTwoDigits}-${currentYearLastTwoDigits}`;

    return financialYearString;
};