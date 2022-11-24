let ins = document.getElementById("instructions_img");
export let instructions_state;
const min_start = 0;
const min_end = -900;

var audio = new Audio();
audio.src = "../resources/pickupCoin.wav";
audio.preload = "auto";

import Finale from "./Finale.js";
export const finale = new Finale();

document.addEventListener('DOMContentLoaded', () => 
{
    audio.load();
});

document.addEventListener('keydown', event => 
{
    switch (event.key)
    {
        case "x":
        case "X":
            //let ran = Math.floor(Math.random() * (2 - 1) + 1);
            //if (ran == 9)
            //{
                console.log("HI")
                audio.play();
            //}
            changeInstructionsAnimation(instructions_state);
            break;
    }
})

export function changeInstructions(state)
{
    instructions_state = state ?? "off";
    switch (state)
    {
        case "on":
            ins.style.bottom = min_start + 'px';
            break;
        case "off":
            ins.style.bottom = min_end + 'px';
            break;
    }
}
function changeInstructionsAnimation(state)
{
    switch (state)
    {
        case "on":
            instructions_state = "off";
            ins.style.animation = "putAway 0.3s ease-in";
            ins.style.bottom = min_end + 'px';
            break;
        case "off":
            instructions_state = "on";
            ins.style.animation = "takeOut 0.3s ease-out"
            ins.style.bottom = min_start + 'px';
            break;
    }
}

instructions_state = "off";
ins.style.bottom = -900 + 'px';