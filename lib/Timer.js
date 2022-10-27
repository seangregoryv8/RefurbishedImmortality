import Controls from "../src/enums/Controls.js";
import { action } from "../src/globals.js";
import { formatStopwatch } from "../src/static.js";

export default class Timer
{
    constructor(maxTime)
    {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        
        this.maxTime = maxTime;
    }
    reset()
    {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    }
    decrement()
    {
        if (this.seconds == 0 && this.minutes == 0 && this.hours == 0)
            return "STOP";
        
        if (this.seconds != 0)
        {
            this.seconds--;
        }
        else
        {
            this.seconds = 59;
            if (this.minutes != 0)
            {
                this.minutes--;
            }
            else
            {
                if (this.hours != 0)
                {
                    this.hours--;
                }
            }
        }
        return this.getTime();
    }
    increment()
    {
        if (this.hours == 24)
        {
            this.hours = 0;
        }
        else if (this.minutes >= 59)
        {
            this.minutes = 0;
            this.hours++;
        }
        else if (this.seconds >= 59)
        {
            this.seconds = 0;
            this.minutes++;
        }
        else
        {
            this.seconds++;
        }
        return this.getTime();
    }
    getTime()
    {
        if (this.hours == 0 && this.minutes == 0 && this.seconds == 0)
            return "--:--:--"
        else
            return formatStopwatch(this.hours, this.minutes, this.seconds)
    }
}