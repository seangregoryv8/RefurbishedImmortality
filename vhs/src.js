import SoundName from "../src/enums/SoundName.js";
import TapeState from "../src/enums/TapeState.js";
import { min_end, sounds, stateMachine } from "../src/globals.js";
import { changeInstructions, instructions_state } from "../src/main.js";
import { fadeInBlue, fadeOutBlue } from "./globals.js";

let tv = document.getElementById("tv");
let tv_state;
function changeTV(state)
{
    switch (state)
    {
        case "on":
            tv_state = "off";
            tv.src = "./tv_off.png";
            sounds.play(SoundName.TurnOff);
            break;
        case "off":
            tv_state = "on";
            tv.src = "./tv_on.png";
            sounds.play(SoundName.TurnOn);
            break;
    }
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
                if (tv_state == "on")
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
    let p = document.getElementsByTagName('p')[0]
    let i = document.getElementById("instructions_img");
    p.innerHTML = "Choose"
    let kill = "../resources/instructions-kill.png";
    let leave = "../resources/instructions-leave.png"
    i.src = kill;
    document.addEventListener('keydown', event => 
    {
        switch (event.key)
        {
            case "ArrowUp":
                i.src = kill;
                break;
            case "ArrowDown":
                i.src = leave;
                break;
            case "Enter":
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
                    localStorage.setItem("state", "leave");
                    stateMachine.set(TapeState.Leave);
                    p.innerHTML = "LEAVE";
                    setTimeout(() => 
                    {
                        tv.style.animation = "fadeIn 5s ease-in-out";
                        tv.addEventListener('animationend', () => 
                        {
                            tv.style.opacity = 0;
                            localStorage.setItem("state", "leave");
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
tv_state = "off";
tv.src = "./tv_off.png";