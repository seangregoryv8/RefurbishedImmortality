import
{
    effect,
    face,
    tapes,
    error,
    finale
} from "./globals.js";

import
{
    instructions_state,
    changeInstructions
} from "../../src/main.js"

import
{
    sounds,
    stateMachine
} from "../../src/globals.js";

import SoundName from "../../src/enums/SoundName.js";
import TapeState from "../../src/enums/TapeState.js";

changeInstructions(localStorage.getItem("instructions"))
// Add error message everytime after the 3 have been selected
// Have face continuously and slowly approach every time error appears
// Have VCR crash after face gets close enough
effect.rollStatic();
window.onload = function()
{
    //sounds.play(SoundName.Hiss)
    if (stateMachine.check(TapeState.Choice))
    {
        face.height = 670;
        face.style.visibility = "visible";
        face.style.animation = "shake 0.3s linear";
    }
    if (localStorage.getItem("finaleTapes") != null)
        finale.tapes = JSON.parse(localStorage.getItem("finaleTapes"))
    if (localStorage.getItem('previousTape') != null)
    {
        finale.checkForFinale(localStorage.getItem('previousTape'))
    }

    if (stateMachine.check(TapeState.Finale))
    {
        face.style.visibility = 'visible';
        finale.prepareFirst();
    }
    
    let keyDown = false;
    
    document.addEventListener('keydown', event => 
    {
        if (!finale.error)
        {
            if (!keyDown)
            {
                keyDown = true;
                switch (event.key)
                {
                    case "ArrowUp":
                        sounds.play(SoundName.Select);
                        tapes.up();
                        break;
                    case "ArrowDown":
                        sounds.play(SoundName.Select);
                        tapes.down();
                        break;
                    case "ArrowLeft":
                        sounds.play(SoundName.Select);
                        tapes.left();
                        break;
                    case "ArrowRight":
                        sounds.play(SoundName.Select);
                        tapes.right();
                        break;
                    case " ":
                    case "Enter":
                        localStorage.setItem("instructions", instructions_state);
                        document.location.href = tapes.getTape().getElementsByTagName("a")[0].href + "?chosenTape=" + tapes.getTape().id;
                        break;
                    case "Backspace":
                        sounds.play(SoundName.TurnOff);
                        document.getElementById("topbar").style.animation = "topOut 1.2s ease-out";
                        document.getElementById("bottombar").style.animation = "bottomOut 1.2s ease-out";

                        document.getElementById("topbar").style.top = 0;
                        document.getElementById("bottombar").style.bottom = 0;
                        document.addEventListener("animationend", function() 
                        {
                            localStorage.setItem("instructions", instructions_state);
                            document.location.href = "../vhs/tv.html";
                        });
                        break;
                }
            }
        }
        else if (!stateMachine.check(TapeState.FaceFinale))
        {
            error.style.visibility = "visible";
            sounds.play(SoundName.Error);
            error.style.left = Math.floor(Math.random() * 100) + 'vw';
            error.style.top = Math.floor(Math.random() * 100) + 'vh';
            finale.increaseFace();
            setTimeout(() => 
            {
                setInterval(() => 
                {
                    error.style.left = Math.floor(Math.random() * 100) + 'vw';
                    error.style.top = Math.floor(Math.random() * 100) + 'vh';
                }, 100);
                
            }, 4000)
        }
    })
    
    document.addEventListener('keyup', () => 
    {
        keyDown = false;
    })
}
window.onbeforeunload = function()
{
    localStorage.setItem("finaleTapes", JSON.stringify(finale.tapes))
}

// Get the ul
// Run the php script
// Get everything in the array it returns
// Formulate it to make the li's for each iteration
// Reformat so \ appears as /

