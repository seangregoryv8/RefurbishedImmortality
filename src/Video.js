import { currentTime, damage } from "./globals.js";

export default class Video
{
    constructor()
    {
        this.video = document.getElementById("mainVideo");
    }

    getSpeed() { return this.video.playbackRate; }
    setSpeed(speed) { this.video.playbackRate = speed; }

    getTime()
    {
        return Math.floor(parseFloat(this.video.currentTime));
    }
    setTime(time)
    {
        this.video.currentTime = time;
    }

    getMilliTime()
    {
        let time = this.video.currentTime;
        return parseFloat(time %= 1).toFixed(3);
    }

    reset()
    {
        this.setSpeed(1.0);
        this.setTime(0);
        this.video.pause();
    }

    playPause()
    {
        console.log("ACTIVE: " + damage.activeEffect)
        if (!damage.activeEffect)
        {
            // Step 2: Save the video time when you pause
            if (this.video.paused || this.video.playbackRate != 1)
            {
                this.video.play();
                this.video.playbackRate = 1.0;
                currentTime.setTimeInterval();
            }
            else
            {
                this.video.pause();
                currentTime.updatePaused();
            }
        }
    }

    isPaused() { return this.video.paused; }

    fastForward()
    {
        this.video.playbackRate = 1.75
    }
    rewind()
    {
        this.video.playbackRate = -1.5
    }

    manageTimer()
    {
        let time = this.getTime();
        this.lastTime = time;
    }
}

/*var video = new Video();

document.addEventListener('keydown', event => 
{
    switch (event.key)
    {
        case "ArrowRight":
            video.rewind();
            break;
        case "ArrowLeft":
            video.fastForward();
            break;
        case " ":
            video.playPause();
    }
});*/

// horizontalOffset = event.pageX - 1200;
// verticalOffset = event.pageY - 600;