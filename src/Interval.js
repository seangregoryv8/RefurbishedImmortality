import Controls from "./enums/Controls.js";
import { changeControl, changeCurrentTime, currentTime, dateTime, VIDEO } from "./globals.js";

export default class Interval
{
    // The main constructor sets the VHS to repeat every second with the Play icon
    constructor()
    {
        this.currentInterval = setInterval(this.manipulate, 1000, Controls.Play);
        this.milliseconds = 0;
    }

    // This clears the current interval, ending the current timer on the right
    clear()
    {
        clearInterval(this.currentInterval);
    }

    // This clears the current interval and replaces it with a potentially faster or slower interval with a new control
    reset(speed, ctl)
    {
        this.clear();
        this.currentInterval = setInterval(this.manipulate, speed, ctl)
    }
    
    // This manipulates the timer to either decrement or increment the timer, before displaying it in the correct element
    manipulate(ctl)
    {
        if (!VIDEO)
        {
            if (ctl == Controls.Rewind)
            {
                // f will be "STOP" if there is no more time, thus forcing it to play again and start at 0. Prevents negative
                let f = currentTime.decrement();
                if (f != "STOP")
                    changeCurrentTime(f);
                else
                {
                    ctl = Controls.Play;
                    changeCurrentTime(currentTime.getTime());
                    changeControl(Controls.Stop);
                }
            }
            else if (ctl != Controls.Pause && ctl != Controls.Stop)
                changeCurrentTime(currentTime.increment());
        }
    }

    /*changeTime()
    {
        currentTime.changeTime(video.getTime());
        changeCurrentTime(currentTime.getTime());
    }*/
    setTime()
    {
        setInterval(function() 
        {
            document.getElementById("time").innerHTML = dateTime.getTime();
            document.getElementById("currentDate").innerHTML = dateTime.getDate();    
        }, 1000);
    }
    
}