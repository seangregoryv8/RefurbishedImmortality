import Speed from "./enums/Speed.js";
import { action, currentTime } from "./globals.js";

/**
 * This controls everything related to the current video playing
 */
export default class Video
{
    /**
     * The constructor accepts an HTMLElement, specifically a video HTMLElement, as its variable, and sets it 
     * into this.video
     * @param {HTMLElement} video 
     */
    constructor(video)
    {
        this.video = video;
    }

    // The following two get the videos playbackRate, aka how fast the video is playing.
    // I am currently unable to make the video play with negative playbackRate, aka in reverse.
    getSpeed() { return this.video.playbackRate; }
    setSpeed(speed) { this.video.playbackRate = speed; }

    /**
     * @returns The current time of the video rounded to the nearest decimal
     */
    getTime()
    {
        return Math.floor(parseFloat(this.video.currentTime));
    }

    /**
     * This takes in a new time to set the video to.
     * @param {number} time 
     */
    setTime(time)
    {
        this.video.currentTime = time;
    }

    /**
     * Meant for a more specific reading of the video time.
     * @returns The time of the video to the nearest thousandth of a second
     */
    getMilliTime()
    {
        let time = this.video.currentTime;
        return parseFloat(time %= 1).toFixed(3);
    }

    /**
     * Resets the video entirely, setting its speed back to normal, its time to 0, and pausing the video.
     */
    reset()
    {
        this.setSpeed(Speed.Normal);
        this.setTime(0);
        this.video.pause();
    }

    /**
     * This is hit whenever the spacebar is pressed, and checks whether the video is paused or not.
     *   If the video is paused or the speed isnt normal (fast forward or rewind), it sets the video 
     *   back to normal playing speed, plays the video, and sets a new interval to count the time.
     * 
     *   Otherwise, the video must be playing like normal, so it pauses the video and clears the 
     *   current interval, saving precious space.
     */
    playPause()
    {
        if (!action.stay)
        {
            // Step 2: Save the video time when you pause
            if (this.video.paused || this.getSpeed() != Speed.Normal || !action.ejecting)
            {
                this.video.play();
                this.setSpeed(Speed.Normal);
                currentTime.setTimeInterval();
            }
            else
            {
                this.video.pause();
                currentTime.updatePaused();
            }
        }
    }

    // This checks whether the video is currently paused
    isPaused() { return this.video.paused; }

    // This sets the new speed to a faster rate.
    fastForward()
    {
        this.setSpeed(Speed.Fast);
        this.video.play();
        currentTime.setTimeInterval();
    }

    // This sets the new speed to a reverse rate (Doesn't work yet)
    rewind()
    {
        this.setSpeed(Speed.Reverse);
    }
}