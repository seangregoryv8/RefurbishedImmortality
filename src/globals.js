export const DEBUG = false;
export const VIDEO = true;

export const BODY = document.getElementsByTagName('body')[0];
export function changeCurrentTime(time)
{
    document.getElementById("currentTime").innerHTML = time;
}

export function changeControl(ctl)
{
    document.getElementById("control").innerHTML = ctl;
}

export function getVideoTitle()
{
    let first = video.video.firstElementChild.outerHTML;
    let second = first.substring(first.indexOf("src="), first.indexOf("type="))
    let third = second.substring(second.lastIndexOf("/") + 1, second.indexOf("."));
    return third;
}

import Video from "./Video.js";
export const video = new Video();

import DateTime from "../lib/DateTime.js";
export const dateTime = new DateTime();

import Timer from "../lib/Timer.js";
export const currentTime = new Timer(parseFloat(video.video.duration).toFixed(2));

import Damage from "./Damage.js";
export const damage = new Damage();

import Interval from "./Interval.js";
export const interval = new Interval();

import Action from "./Action.js";
export const action = new Action();

import KeyEventValues from "./KeyEventValues.js";
export const keys = new KeyEventValues();

document.getElementById("mainVideo").addEventListener('ended', () => 
{
    action.delete();
});