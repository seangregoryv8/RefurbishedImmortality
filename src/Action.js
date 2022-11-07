import Controls from "./enums/Controls.js";
import Speed from "./enums/Speed.js";
import { action, changeControl, currentTime, damage, interval, VIDEO, video } from "./globals.js";

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
            damage.blackEffect();
        }
        this.set(Controls.Stop);
        currentTime.reset();
        if (!VIDEO) interval.clear();
        document.getElementById("currentTime").innerHTML = currentTime.getTime();
        if (VIDEO) video.reset();
        changeControl(this.symbol);
    }

    spacebar()
    {
        this.stopRecording();
        switch (this.get())
        {
            case Controls.Rewind:
            case Controls.Forward:
            case Controls.Stop:
                damage.none();
                this.set(Controls.Play);
                if (!VIDEO) interval.reset(Speed.Normal, this.symbol);
                break;
            case Controls.Play:
                damage.light();
                this.set(Controls.Pause);
                if (!VIDEO) interval.clear();
                break;
            case Controls.Pause:
                damage.light();
                this.set(Controls.Play);
                if (!VIDEO) interval.reset(Speed.Normal, this.symbol);
                break;
        }
        if (VIDEO) video.playPause();
    }

    left()
    {
        this.stopRecording();
        if (!this.see(Controls.Forward))
        {
            if (VIDEO) video.fastForward();
            damage.heavy();
            this.set(Controls.Forward);
            if (!VIDEO) interval.reset(Speed.Faster, this.symbol);
        }
        else
        {
            if (VIDEO) video.playPause();
            damage.none();
            this.set(Controls.Play);
            if (!VIDEO) interval.reset(Speed.Normal, this.symbol);
        }
    }

    right()
    {
        this.stopRecording();
        if (!this.see(Controls.Rewind))
        {
            if (VIDEO) video.rewind();
            damage.heavy();
            this.set(Controls.Rewind);
            if (!VIDEO) interval.reset(Speed.Fast, this.symbol);
        }
        else
        {
            if (VIDEO) video.playPause();
            damage.none();
            this.set(Controls.Play);
            if (!VIDEO) interval.reset(Speed.Normal, this.symbol);
        }
    }

    escape()
    {
        this.stopRecording();
        this.symbol = (this.symbol == Controls.Eject) ? Controls.Play : Controls.Eject;
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