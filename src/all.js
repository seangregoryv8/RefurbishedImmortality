let ins = document.getElementById("instructions_img");
export let instructions_state;
const min_start = 0;
const min_end = -900;

import Sound from "./Sound.js"
export const sound = new Sound();

import Finale from "./Finale.js";
import Sounds from "./enums/Sounds.js";
export const finale = new Finale();


document.addEventListener('keydown', event => 
{
    switch (event.key)
    {
        case "x":
        case "X":
            sound.play(Sounds.AmongUs);
            //let ran = Math.floor(Math.random() * (2 - 1) + 1);
            //if (ran == 9)
            //{
                //audio.cloneNode().play();
            //}
            //audio.cloneNode().play();
            //console.log(audio);
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