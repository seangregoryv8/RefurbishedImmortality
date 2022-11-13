export const DEBUG = false;

export const BODY = document.getElementsByTagName('body')[0];
export function changeCurrentTime(time)
{
    document.getElementById("currentTime").innerHTML = time;
}

export function changeControl(ctl)
{
    document.getElementById("control").innerHTML = ctl;
}

export function visibleVideo(visible = true)
{
    document.getElementById("mainVideo").style.visibility = visible ? "visible" : "hidden";
}

export function getVideoTitle()
{
    let first = video.video.firstElementChild.outerHTML;
    let second = first.substring(first.indexOf("src="), first.indexOf("type="))
    let third = second.slice(second.indexOf('"') + 1, second.lastIndexOf('"'));
    let fourth = third.slice(third.lastIndexOf("/") + 1, third.length);
    let fifth = fourth.slice(0, fourth.lastIndexOf("."))
    return fifth;
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
export const keys = new KeyEventValues();

document.getElementById("mainVideo").addEventListener('ended', () => 
{
    action.delete();
});