export const body = document.getElementsByTagName('body')[0];

export const min_start = 0;
export const min_end = -900;

export function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function fadeToBlack(newLocation)
{
    document.getElementsByTagName('head')[0].getElementsByTagName('style')[0].innerHTML += 
    '\
    @keyframes fadeBlack {\
        0% { opacity: 0; }\
        100% { opacity: 1; }\
    }';

    console.log(document.getElementsByTagName('head')[0].getElementsByTagName('style')[0])
    let bar = document.createElement("div");
    bar.id = "bar";
    bar.style.position = "fixed";
    bar.style.top = 0;
    bar.style.left = 0;
    bar.style.height = "100%";
    bar.style.width = "100%";
    bar.style.opacity = 0;
    bar.style.backgroundColor = "black";
    body.appendChild(bar);
    bar.style.animation = "fadeBlack 2s linear";

    bar = document.getElementById("bar");
    bar.style.opacity = 1;
    bar.addEventListener("animationend", () => 
    {
        document.location.href = newLocation;
    })
}

import SoundName from "./enums/SoundName.js";
import Sounds from "./lib/Sounds.js";
export const sounds = new Sounds();

import StateMachine from "./StateMachine.js";
export const stateMachine = new StateMachine();

fetch(`../${parent.document.URL.includes("kill") ? "../" : ""}src/config.json`).then(response => response.json())
.then(response => 
{
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