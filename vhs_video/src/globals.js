export const DEBUG = false;

export const BODY = document.getElementsByTagName('body')[0];
export function changeCurrentTime(time)
{
    document.getElementById("currentTime").innerHTML = time;
}

export function changeControl(ctl)
{
    if (localStorage.getItem('state') != 'finale')
        document.getElementById("control").innerHTML = ctl;
}

export function changeVolume(amount)
{
    let vol = "";
    amount -= 0.1;
    
    while (amount > 0)
    {
        amount -= 0.1;
        vol += "|";
    }
    document.getElementById("volumeLevel").innerHTML = vol;
}

export function visibleVideo(visible = true)
{
    document.getElementById("mainVideo").style.visibility = visible ? "visible" : "hidden";
}

export function getVideoTitle()
{
    if (localStorage.getItem('state') != 'finale')
    {
        let title = video.video.firstElementChild.outerHTML;
        title = title.substring(title.indexOf("src="), title.indexOf("type="))
        title = title.slice(title.indexOf('"') + 1, title.lastIndexOf('"'));
        title = title.slice(title.lastIndexOf("/") + 1, title.length);
        title = title.slice(0, title.lastIndexOf("."))
        return title;
    }
    else
    {
        let title = document.getElementById("image").src;
        title = title.substring(title.lastIndexOf('/') + 1, title.length);
        title = title.substring(0, title.lastIndexOf('.'));
        return title;
    }
}

export function getRandomNumber(min = 0, max = 2) { return Math.floor(Math.random() * (max - min) + min); }

import Video from "./Video.js";
export const video = new Video(document.getElementById("mainVideo"));

import DateTime from "../lib/DateTime.js";
export const dateTime = new DateTime();

import Timer from "../lib/Timer.js";
export const currentTime = new Timer(parseFloat(video.video.duration).toFixed(2));

import Effect from "../lib/Effect.js";
export const effect = new Effect();

import Action from "./Action.js";
export const action = new Action();

import KeyEventValues from "./KeyEventValues.js";
import { finale } from "../../all.js";
export const keys = new KeyEventValues();

document.getElementById("mainVideo").addEventListener('ended', () => 
{
    action.delete();
});