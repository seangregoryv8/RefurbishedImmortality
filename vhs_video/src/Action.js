import Controls from "./enums/Controls.js";
import { action, changeControl, changeCurrentTime, currentTime, effect, video, visibleVideo } from "./globals.js";

export default class Action
{
    constructor()
    {
        this.delete();

        this.stay = false;
        this.ejecting = false;
    }

    get() { return this.symbol; }
    set(symbol) { if (!this.stay) this.symbol = symbol; }
    see(symbol) { return this.symbol == symbol; }

    delete()
    {
        if (!this.ejecting)
        {
            this.stopRecording();
            visibleVideo(false);
            if (this.get() != null && !this.see(Controls.Stop))
            {
                effect.rollTrue(effect.blackEffectHeavy);
            }
            this.set(Controls.Stop);
            currentTime.reset();
            changeCurrentTime(currentTime.getTime());
            video.reset();
            changeControl(this.symbol);
        }
    }

    spacebar()
    {
        if (!this.ejecting)
        {
            if (this.see(Controls.Stop))
            {
                this.set(Controls.Play);
                this.stay = true;
                setTimeout(() => 
                {
                    this.stay = false;
                    visibleVideo();
                    this.stopRecording();
                    video.playPause();
                }, 2500);
            }
            else if (!this.stay) this.play();
        }
    }

    play()
    {
        if (!this.ejecting)
        {
            visibleVideo();
            this.stopRecording();
            effect.rollStatic();
            effect.rollTrue(effect.blackEffectLight, 5);

            this.set(this.see(Controls.Play) ? Controls.Pause : Controls.Play);
            video.playPause();
        }
    }

    left()
    {
        if (!this.ejecting)
        {
            visibleVideo();
            this.stopRecording();
            effect.rollStatic();
    
            if (!this.see(Controls.Forward))
            {
                video.fastForward();
                this.set(Controls.Forward);
            }
            else
            {
                video.playPause();
                this.set(Controls.Play);
            }
        }
    }

    right()
    {
        if (!this.ejecting)
        {
            visibleVideo();
            this.stopRecording();
            effect.rollStatic();
    
            if (!this.see(Controls.Rewind))
            {
                video.rewind();
                this.set(Controls.Rewind);
            }
            else
            {
                video.playPause();
                this.set(Controls.Play);
            }
        }
    }

    escape()
    {
        this.ejecting = true;
        document.getElementById("mainVideo").style.visibility = "hidden";
        this.stopRecording();
        this.set(Controls.Eject);
        video.playPause();

        setTimeout(() => 
        {
            document.location.href = "../vhs_menu/menu.html"
        }, 3500)
    }

    record()
    {
        if (action.symbol == Controls.Play)
        {
            document.getElementById("record").style.visibility =
            document.getElementById("record").style.visibility == "visible"
            ? "hidden" : "visible";
        }
    }

    stopRecording()
    {
        document.getElementById("record").style.visibility = "hidden";
    }
}