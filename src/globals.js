export const body = document.getElementsByTagName('body')[0];

export const min_start = 0;
export const min_end = -900;

export function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

import SoundName from "./enums/SoundName.js";
import Sounds from "./lib/Sounds.js";
export const sounds = new Sounds();

import StateMachine from "./StateMachine.js";
export const stateMachine = new StateMachine();

export let tapesJSON = {};

fetch(`../${parent.document.URL.includes("kill") ? "../" : ""}src/config.json`).then(response => response.json())
.then(response => 
{
    tapesJSON = response.tapes;
    if (parent.document.URL.includes("kill"))
    {
        for (let i = 0; i < response.sounds.length; i++)
        {
            response.sounds[i].path = "../" + response.sounds[i].path;
        }
    }
    const
    {
        sounds: soundDefinitions
    } = response;

    sounds.load(soundDefinitions);

    if (parent.document.URL.includes("video") || parent.document.URL.includes("menu"))
        sounds.play(SoundName.Hiss);
})