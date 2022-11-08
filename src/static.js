/**
 * @param {number} hours 
 * @param {number} minutes 
 * @returns hours:minutes AM/PM
 */
export function formatTime(hours, minutes)
{
    let AMPM = "AM";
    if (hours >= 12)
    {
        AMPM = "PM";
    }
    if (hours > 12)
    {
        hours -= 12;
    }
    let h = (hours >= 10 ? hours : "0" + hours)
    let m = (minutes >= 10 ? minutes : "0" + minutes)
    return ` ${h}:${m} ${AMPM}`;
}

/**
 * @param {number} hours 
 * @param {number} minutes 
 * @param {number} seconds 
 * @returns hours:minutes:seconds
 */
export function formatStopwatch(hours, minutes, seconds)
{
    let h = (hours >= 10 ? hours : "0" + hours)
    let m = (minutes >= 10 ? minutes : "0" + minutes)
    let s = (seconds >= 10 ? seconds : "0" + seconds)
    return ` ${h}:${m}:${s}`;
}

/**
 * @param {number} year 
 * @param {string} month 
 * @param {number} day 
 * @returns MONTH DAY YEAR
 */
export function formatDate(year, month, day)
{
    let m = "JAN"
    switch (month)
    {
        case "1": m = "JAN"; break;
        case "2": m = "FEB"; break;
        case "3": m = "MAR"; break;
        case "4": m = "APR"; break;
        case "5": m = "MAY"; break;
        case "6": m = "JUN"; break;
        case "7": m = "JUL"; break;
        case "8": m = "AUG"; break;
        case "9": m = "SEP"; break;
        case "10": m = "OCT"; break;
        case "11": m = "NOV"; break;
        case "12": m = "DEC"; break;
    }

    return `${m}.${day} ${year}`;
}