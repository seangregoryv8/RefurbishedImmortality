import { formatTime, formatDate } from "../src/static.js"

/**
 * A universal class for getting the date and time for the VHS player
 */
export default class DateTime
{
    // The constructor refreshes the date and time, before a new interval is called in main.js, setting 
    // the HTMLElements to the proper date and time.
    constructor()
    {
        this.refreshDateAndTime();
    }
    
    /**
     * This finds the new date using the Date class, sets the day, month, year (which is permanently 
     * set to 1971, the year this story takes place), hour, minute, and second actively updating
     * every time the getTime or getDate is called
     */
    refreshDateAndTime()
    {
        let today = new Date();
        this.day = String(today.getDate());
        this.month = String(today.getMonth() + 1).padStart(2, '0')
        //this.year = today.getFullYear();
        this.year = 1971;
        this.hours = today.getHours();
        this.minutes = today.getMinutes();
        this.seconds = today.getSeconds();
    }

    /**
     * Refreshes the time, then delivers it in a presentable fashion
     * @returns The result of the formatTime class, found in static.js
     */
    getTime()
    {
        this.refreshDateAndTime();

        return formatTime(this.hours, this.minutes);
    }

    /**
     * Refreshes the date, then delivers it in a presentable fashion
     * @returns The result of the formatDate class, found in static.js
     */
    getDate()
    {
        this.refreshDateAndTime();

        return formatDate(this.year, this.month, this.day);
    }
}