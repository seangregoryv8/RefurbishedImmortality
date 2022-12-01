import SoundName from "../src/enums/SoundName.js";
import TapeState from "../src/enums/TapeState.js";
import { min_end, sounds, stateMachine } from "../src/globals.js";
import { changeInstructions, instructions_state } from "../src/main.js";
import { fadeInBlue, fadeOutBlue } from "./globals.js";
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
    
    tv.style.animation = "zoomOut 1.2s ease-out";
    fadeInBlue();

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
                    fadeOutBlue();
                    tv.style.animation = "zoomIn 1s linear";
                    tv.addEventListener('animationend', () => 
                    {
                        localStorage.setItem("instructions", instructions_state)
                        document.location.href = "../vhs_menu/menu.html";
                    });
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
                        tv.style.animation = "fadeIn 5s ease-in-out";
                        tv.addEventListener('animationend', () => 
                        {
                            tv.style.opacity = 0;
                            document.location.href = "./kill/kill.html?choice=leave";
                        })
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