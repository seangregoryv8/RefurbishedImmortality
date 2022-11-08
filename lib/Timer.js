import { changeCurrentTime, video } from "../src/globals.js";
import { formatStopwatch } from "../src/static.js";

/**
 * This deals with everything related to the Timer, that being the time at which the video is playing
 */
export default class Timer
{
    /**
     * Sets the 
     * @param {number} maxTime 
     */
    constructor(maxTime)
    {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        
        this.maxSeconds = maxTime;
        this.maxMinutes = 0;
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

        //this.milliseconds = 0;
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
        }, 1);
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
        //this.milliseconds = video.getMilliTime();
        this.changeSeconds(video.getTime());

        //console.log(this.milliseconds)
    }

    /**
     * Changes the seconds of how long the video has been playing for, before formatting it properly and 
     * setting the currentTime to the new time.
     * @param {number} seconds 
     */
    changeSeconds(seconds)
    {
        this.seconds += (this.cutSeconds(seconds) - this.seconds);
        console.log(this.seconds);
        this.format();
        changeCurrentTime(this.getTime())
    }

    /**
     * Takes the current amount of seconds from the video and trims it down depending on the minutes and hours
     * @param {number} seconds 
     * @returns The cut amount of seconds
     */
    cutSeconds(seconds)
    {
        let minutes = this.minutes + (this.hours * 60);
        
        while (minutes != 0)
        {
            seconds -= 60;
            minutes--;
        }
        
        return seconds;
    }

    /**
     * This takes all the seconds and sets them to their respective minutes or hours
     */
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
    
    /**
     * Delivers the time in a presentable fashion
     * @returns The result of the formatStopwatch class, found in static.js
     */
    getTime()
    {
        return formatStopwatch(this.hours, this.minutes, this.seconds)
    }
}