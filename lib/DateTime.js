import { formatTime, formatDate } from "../src/static.js"

export default class DateTime
{
    constructor()
    {
        this.refreshDateAndTime();
    }
    
    refreshDateAndTime()
    {
        let today = new Date();
        this.day = String(today.getDate());
        this.month = String(today.getMonth() + 1).padStart(2, '0')
        //this.year = today.getFullYear();
        this.year = 1977;
        this.hours = today.getHours();
        this.minutes = today.getMinutes();
        this.seconds = today.getSeconds();
    }

    getTime()
    {
        this.refreshDateAndTime();

        return formatTime(this.hours, this.minutes);
    }

    getDate()
    {
        this.refreshDateAndTime();

        return formatDate(this.year, this.month, this.day);
    }
}