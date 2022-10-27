import DateTime from "../lib/DateTime.js";
import Timer from "../lib/Timer.js";
import Damage from "./Damage.js";
import Interval from "./Interval.js";
import Action from "./Action.js";
import KeyEventValues from "./KeyEventValues.js";
import Video from "./Video.js";
import Controls from "./enums/Controls.js";

export const video = new Video();

export const dateTime = new DateTime();
export const currentTime = new Timer(parseFloat(video.video.duration).toFixed(2));

export const damage = new Damage();
export const interval = new Interval();
export const action = new Action();
export const keys = new KeyEventValues();

document.getElementById("mainVideo").addEventListener('ended', () => 
{
    action.stopRecording();
    if (action.symbol != null && action.symbol != Controls.Stop)
    {
        damage.blackEffect();
    }
    action.symbol = Controls.Stop;
    currentTime.reset();
    //interval.clear();
    document.getElementById("currentTime").innerHTML = currentTime.getTime();
    video.reset();
    document.getElementById("control").innerHTML = action.symbol;
});

export const BODY = document.getElementsByTagName('body')[0];