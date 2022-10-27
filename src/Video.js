export default class Video
{
    constructor()
    {
        this.video = document.getElementById("mainVideo");

        setInterval(() => 
        {
            this.setSpeed(this.video.playbackRate);
            this.setTime(this.video.currentTime);
        }, 10);
    }

    getSpeed() { return this.video.playbackRate; }
    setSpeed(speed) { this.video.playbackRate = speed; }

    getTime() { return parseFloat(this.video.currentTime).toFixed(0); }
    setTime(time) { this.video.currentTime = time; }

    reset()
    {
        this.setSpeed(1.0);
        this.setTime(0);
        this.video.pause();
    }

    playPause()
    {
        if (this.video.paused || this.video.playbackRate != 1)
        {
            this.video.play();
            console.log(this.video.playbackRate)
            this.video.playbackRate = 1.0;
        }
        else
        {
            console.log("HI")
            this.video.pause();
        }
    }

    fastForward()
    {
        this.video.playbackRate = 1.75
    }
    rewind()
    {
        this.video.playbackRate = -1.5
    }
}