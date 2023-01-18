import SoundName from "../../src/enums/SoundName.js";
import TapeState from "../../src/enums/TapeState.js";
import { sounds, stateMachine } from "../../src/globals.js";
import { instructions_state } from "../../src/main.js";
import Controls from "./enums/Controls.js";
import
{
    action,
    changeControl,
    changeCurrentTime,
    changeVolume,
    currentTime,
    effect,
    video,
    visibleVideo
} from "./globals.js";

export default class Action
{
    constructor()
    {
        this.delete();

        this.stay = false;
        this.untouchable = false;
    }

    get() { return this.symbol; }
    set(symbol) { if (!this.stay) this.symbol = symbol; }
    see(symbol) { return this.symbol == symbol; }

    delete()
    {
        setTimeout(() => 
        {
            sounds.play(SoundName.Hiss);
        }, 1000)
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

    spacebar()
    {
        if (this.see(Controls.Stop))
        {
            this.set(Controls.Play);
            this.stay = true;
            setTimeout(() => 
            {
                sounds.pause(SoundName.Hiss);
                this.stay = false;
                visibleVideo();
                this.stopRecording();
                video.playPause();
            }, 2500);
        }
        else if (!this.stay) this.play();
    }

    play()
    {
        sounds.pause(SoundName.Hiss);
        visibleVideo();
        this.stopRecording();
        effect.rollStatic();
        effect.rollTrue(effect.blackEffectLight, 5);

        this.set(this.see(Controls.Play) ? Controls.Pause : Controls.Play);
        video.playPause();
    }

    left()
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

    right()
    {
        visibleVideo();
        this.stopRecording();
        effect.rollStatic();

        if (!this.see(Controls.Rewind))
        {
            this.set(Controls.Rewind);
            video.rewind();
        }
        else
        {
            video.playPause();
            this.set(Controls.Play);
        }
    }

    volume(act)
    {
        switch (act)
        {
            case "ArrowUp":
                if (video.video.volume < 1.0)
                {
                    video.video.volume += 0.1;
                }
                break;
            case "ArrowDown":
                if (video.video.volume > 0.0)
                {
                    video.video.volume -= 0.1;
                }
                break;
        }
        changeVolume(video.video.volume);
    }

    escape()
    {
        if (document.title == "decision")
        {
            stateMachine.set(TapeState.Finale);
        }
        sounds.play(SoundName.Hiss);
        if (stateMachine.check(TapeState.Finale))
        {
            effect.troubleEjecting(0, false, document.getElementById("image"));
        }
        if (!this.stay)
        {
            this.untouchable = true;
            document.getElementById("volume").style.visibility = "hidden";
            document.getElementById("mainVideo").style.visibility = "hidden";
            document.getElementById("currentTime").style.visibility = "hidden";
            document.getElementById("currentDate").style.visibility = "hidden";
            document.getElementById("time").style.visibility = "hidden";
            this.stopRecording();
            this.set(Controls.Eject);
            video.video.pause();
    
            setTimeout(() => 
            {
                if (effect.rollTruePure(4))
                {
                    effect.troubleEjecting(2500);
                }
                else
                {
                    localStorage.setItem("instructions", instructions_state);
                    document.location.href = "../vhs_menu/menu.html"
                }
            }, 3500)
        }
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