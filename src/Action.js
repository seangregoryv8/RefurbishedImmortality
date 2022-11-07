import Controls from "./enums/Controls.js";
import { action, changeControl, currentTime, effect, video } from "./globals.js";

export default class Action
{
    constructor()
    {
        this.delete();
    }

    get() { return this.symbol; }
    set(symbol) { this.symbol = symbol; }
    see(symbol) { return this.symbol == symbol; }

    delete()
    {
        this.stopRecording();
        if (this.get() != null && !this.see(Controls.Stop))
        {
            effect.rollTrue(effect.blackEffectHeavy);
        }
        this.set(Controls.Stop);
        currentTime.reset();
        document.getElementById("currentTime").innerHTML = currentTime.getTime();
        video.reset();
        changeControl(this.symbol);
    }

    spacebar()
    {
        this.stopRecording();
        effect.rollStatic();
        effect.rollTrue(effect.blackEffectLight, 5);

        this.set(this.see(Controls.Play) ? Controls.Pause : Controls.Play);
        video.playPause();
    }

    left()
    {
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

    right()
    {
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

    escape()
    {
        this.stopRecording();
        this.symbol = (this.see(Controls.Eject)) ? Controls.Play : Controls.Eject;
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