import { video } from "../src/globals.js";
import { formatStopwatch } from "../src/static.js";

export default class Timer
{
    constructor(maxTime)
    {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        
        this.maxSeconds = maxTime;
        while (this.maxSeconds >= 60)
        {
            this.maxMinutes++;
            this.maxSeconds -= 60;
        }

        this.timeInterval = setInterval(function() 
        {
            clearInterval(this.timeInterval)
        }, 1000);

        this.videoTimeAtLastSecond = video.getTime();

        this.milliseconds = 0;
    }
    reset()
    {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    }
    // Step 4: When you play the video again, only continue the interval timer
    // ... after a new interval has completed once,
    // ... where the time of that interval is the milliseconds left
    
    //  change the interval timer from 1 second to however many milliseconds it'll take to a full second

    setTimeInterval()
    {
        // Step 1: Save the video time every time the second increments
        this.timeInterval = setInterval(() => 
        {
            if (this.videoTimeAtLastSecond != video.getTime())
            {
                //console.log("INCREMENTED: " + video.getTime())
                this.videoTimeAtLastSecond = video.getTime();
                this.changeSeconds(video.getTime());
            }
        }, 100);
    }

    clearTimeInterval()
    {
        clearInterval(this.timeInterval);
    }

    updatePaused()
    {
        //console.log("PAUSED at " + video.getTime())
        this.videoTimeAtLastSecond = video.getTime();
        this.clearTimeInterval();
        
        // Step 3: Use those two values to figure out how many extra milliseconds
        // ... passed between the last timer increment and the pausing
        this.milliseconds = video.getMilliTime();
        this.changeSeconds(video.getTime());

        //console.log(this.milliseconds)
    }

    updateTime()
    {

        
    }

    changeSeconds(seconds)
    {
        this.seconds = seconds;
        this.format();
        document.getElementById("currentTime").innerHTML = this.getTime();
    }

    format()
    {
        while (this.seconds >= 60)
        {
            this.minutes++;
            this.seconds -= 60;
        }
        while (this.minutes >= 60)
        {
            this.hours++;
            this.minutes -= 60;
        }
    }
    /*decrement()
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
    }*/

    /*changeTime(time)
    {
        let seconds = parseFloat(time).toFixed(0);
        let minutes = 0;
        while (seconds >= 60)
        {
            minutes++;
            seconds -= 60;
        }
        this.seconds = seconds;
        this.minutes = minutes;
    }

    checkMaxTime()
    {
        if (this.seconds == this.maxSeconds && 
            this.minutes == this.maxMinutes)
            action.delete();
    }*/
    
    getTime()
    {
        return formatStopwatch(this.hours, this.minutes, this.seconds)
    }
}