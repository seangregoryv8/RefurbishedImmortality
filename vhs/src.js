import SoundName from "../src/enums/SoundName.js";
import TapeState from "../src/enums/TapeState.js";
import { min_end, sounds, stateMachine, fade } from "../src/globals.js";
import { changeInstructions, instructions_state } from "../src/main.js";
import Command from "../src/enums/Command.js";

let tv = document.getElementById("tv");
let tv_state;

/**
 * 
 * @param {Command} state 
 */
function changeTV(state)
{
    tv_state = (state == Command.Off) ? Command.On : Command.Off;
    tv.src = `../resources/images/tv_${tv_state}.png`;
    sounds.play((tv_state == Command.Off) ? SoundName.TurnOff : SoundName.TurnOn)
}

if (!stateMachine.check(TapeState.Choice))
{
    changeInstructions(localStorage.getItem("instructions"))
    
    tv.style.animation = "zoomOut 2s ease-out";
    fade("in", "black", 2);

    document.addEventListener('keydown', event => 
    {
        switch (event.key)
        {
            case " ":
                changeTV(tv_state);
                break;
            case "Enter":
                if (tv_state == Command.On)
                {
                    tv.style.animation = "zoomIn 2s linear";
                    localStorage.setItem("instructions", instructions_state)
                    fade("out", "#1e3aa4", 2, "../vhs_menu/menu.html");
                }
                break;
        }
    })
}
else
{
    setTimeout(() => { sounds.play(SoundName.Drone); }, 500)
    let p = document.getElementsByTagName('p')[0]
    let i = document.getElementById("instructions_img");
    p.innerHTML = "Choose"
    let kill = "../resources/images/instructions-kill.png";
    let leave = "../resources/images/instructions-leave.png";
    i.src = kill;
    document.addEventListener('keydown', event => 
    {
        switch (event.key)
        {
            case "ArrowUp":
                sounds.play(SoundName.Select);
                i.src = kill;
                break;
            case "ArrowDown":
                sounds.play(SoundName.Select);
                i.src = leave;
                break;
            case "Enter":
                sounds.pause(SoundName.Drone);
                sounds.play(SoundName.Paper);
                i.style.animation = "putAway 0.3s ease-in";
                i.style.bottom = min_end + 'px';
                if (i.src.includes("kill"))
                {
                    stateMachine.set(TapeState.Kill);
                    p.innerHTML = "KILL";
                    setTimeout(() => 
                    {
                        tv.style.animation = "zoomInLess 2.3s ease-in-out";
                        tv.style.scale = 2;
                        tv.addEventListener('animationend', () => 
                        {
                            document.location.href = "./kill/kill.html?choice=kill";
                        })
                    }, 1000)
                }
                else
                {
                    stateMachine.set(TapeState.Leave);
                    p.innerHTML = "LEAVE";
                    setTimeout(() => 
                    {
                        fade("out", "black", 5, "./kill/kill.html?choice=leave");
                    }, 1000)
                }
                break;
        }
    })
    window.onbeforeunload = function() 
    {
        stateMachine.set(TapeState.Choice);
    }
}

tv_state = Command.Off;
tv.src = "../resources/images/tv_off.png";