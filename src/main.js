import
{
    min_start,
    min_end,
    sounds,
    stateMachine
} from "./globals.js"
import SoundName from "./enums/SoundName.js"
import TapeState from "./enums/TapeState.js";

fetch('../src/config.json').then(response => response.json())
.then(response => 
{
    const
    {
        sounds: soundDefinitions
    } = response;

    sounds.load(soundDefinitions);
})

export let instructions_state;
document.addEventListener('keydown', event => 
{
    switch (event.key)
    {
        case "x":
        case "X":
            if (!stateMachine.checkAnd([TapeState.Finale, TapeState.FaceFinale, TapeState.Kill, TapeState.Leave]))
            {
                sounds.play(SoundName.Paper);
                changeInstructionsAnimation(instructions_state);
            }
            break;
    }
})

export function changeInstructions(state)
{
    instructions_state = state ?? "off";
    switch (state)
    {
        case "on":
            document.getElementById("instructions_img").style.bottom = min_start + 'px';
            break;
        case "off":
            document.getElementById("instructions_img").style.bottom = min_end + 'px';
            break;
    }
}
function changeInstructionsAnimation(state)
{
    switch (state)
    {
        case "on":
            instructions_state = "off";
            document.getElementById("instructions_img").style.animation = "putAway 0.3s ease-in";
            document.getElementById("instructions_img").style.bottom = min_end + 'px';
            break;
        case "off":
            instructions_state = "on";
            document.getElementById("instructions_img").style.animation = "takeOut 0.3s ease-out"
            document.getElementById("instructions_img").style.bottom = min_start + 'px';
            break;
    }
}

instructions_state = "off";
if (!window.location.href.includes("kill/kill.html"))
    document.getElementById("instructions_img").style.bottom = -900 + 'px';