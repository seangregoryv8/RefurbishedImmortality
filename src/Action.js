import Controls from "./enums/Controls.js";
import Speed from "./enums/Speed.js";
import { action, currentTime, damage, interval } from "./globals.js";

export default class Action
{
    constructor()
    {
        this.delete();
    }

    get()
    {
        return this.symbol;
    }

    delete()
    {
        this.stopRecording();
        if (this.symbol != null && this.symbol != Controls.Stop)
        {
            damage.blackEffect();
        }
        this.symbol = Controls.Stop;
        currentTime.reset();
        interval.clear();
        document.getElementById("currentTime").innerHTML = currentTime.getTime();
    }

    spacebar()
    {
        this.stopRecording();
        switch (this.symbol)
        {
            case Controls.Rewind:
            case Controls.Forward:
            case Controls.Stop:
                //damage.none();
                this.symbol = Controls.Play;
                interval.reset(Speed.Normal, this.symbol);
                break;
            case Controls.Play:
                damage.light();
                this.symbol = Controls.Pause;
                interval.clear();
                break;
            case Controls.Pause:
                damage.light();
                this.symbol = Controls.Play;
                interval.reset(Speed.Normal, this.symbol);
                break;
        }
    }

    left()
    {
        this.stopRecording();
        if (this.symbol != Controls.Forward)
        {
            damage.heavy();
            this.symbol = Controls.Forward;
            interval.reset(Speed.Faster, this.symbol);
        }
        else
        {
            damage.none();
            this.symbol = Controls.Play;
            interval.reset(Speed.Normal, this.symbol);
        }
    }

    right()
    {
        this.stopRecording();
        if (this.symbol != Controls.Rewind)
        {
            damage.heavy();
            this.symbol = Controls.Rewind;
            interval.reset(Speed.Fast, this.symbol);
        }
        else
        {
            damage.none();
            this.symbol = Controls.Play;
            interval.reset(Speed.Normal, this.symbol);
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