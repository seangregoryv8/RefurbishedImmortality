import { body, fade, randomNumber, sounds, stateMachine } from "../../src/globals.js";
import SoundName from "../../src/enums/SoundName.js";
import TapeState from "../../src/enums/TapeState.js";

let tv = document.getElementById("tv");
let left = document.getElementById("punchLeft");
let right = document.getElementById("punchRight");

let keyDown = false;
let punching = "right";
let punchAgain = true;
let punches = 0;

let crack1 = 1;
let crack2 = 5;
let crack3 = 10;
let shatter = 15;
const timer = ms => new Promise(res => setTimeout(res, ms));

let text = [];
let dialogue = document.getElementById("endDialogue");

function finalPrep()
{
    body.style.backgroundColor = 'white';
    tv.style.opacity = 0;
    tv.src = (stateMachine.check(TapeState.Dead)) ? "../../resources/images/tv_broken.png" : tv.src;
    tv.style.scale = "75%";
    tv.style.left = "30%";
    left.style.visibility = 'hidden';
    right.style.visibility = 'hidden';

    dialogue.innerHTML += "<br><br>"
}

function addLastText()
{
    text.push("<br><br><br>")
    text.push("Refurbished Immortality (Beta)<br>An interactive website by Sean Gregory<br>Thanks to everyone who helped make this possible")
    text.push("<br><br><br>Hope you look forward to more<br>")
    text.push("Thanks for playing...<br>")
    text.push("End communication...")
}
switch (stateMachine.get())
{
    case TapeState.Dead:
        finalPrep();
        text.push("Don't worry sweetheart...<br>You're safe now...<br>You can rest once again...");
        text.push("<br><br><br>");
        text.push("...Thank you...");
        addLastText();
        load(dialogue, text);
        break;
    case TapeState.Leave:
        finalPrep();
        let static_div = document.createElement('div');
        static_div.id = 'static_div';
        
        let staticNoise = document.createElement('img');
        staticNoise.id = 'staticNoise';
        staticNoise.src = "../../vhs_overlays/static.gif";
        staticNoise.draggable = false;
        staticNoise.style.opacity = 0.7;
        staticNoise.style.position = "absolute";
        staticNoise.style.top = 0;
        staticNoise.style.left = 0;
        staticNoise.style.height = "100%";
        staticNoise.style.width = "100%";
        
        static_div.appendChild(staticNoise);
        body.appendChild(static_div);
        
        body.style.backgroundColor = 'black';
        text.push("...<br>You left me...<br>Left me to their vices...<br>");
        text.push("...<br>");
        text.push("I hope that paycheck was worth it...");
        addLastText();
        load(dialogue, text);
        break;
    default:
        document.addEventListener('keydown', event => 
        {
            if (!keyDown)
            {
                keyDown = true;
                if (punchAgain)
                {
                    punchAgain = false;
                    setTimeout(() => 
                    {
                        punchAgain = true;
                    }, 600)
                    punches++;
                    if (punching == "right")
                    {
                        punch(right);
                    }
                    if (punching == "left")
                    {
                        punch(left);
                    }
                }
            }
        })
        break;
}

async function load(dialogue, text)
{
    await timer(500);
    sounds.play(stateMachine.check(TapeState.Dead) ? SoundName.Baby : SoundName.Hiss)
    await timer(3000);
    tv.style.animation = 'fadeOut 4.5s linear';
    tv.addEventListener('animationend', () => { tv.style.opacity = 1; });
    await timer(8000);
    for (let i = 0; i < text.length; i++)
    {
        let p = document.createElement('p');
        p.innerHTML = text[i];
        let time = `${(i == 0 || i == 2 || i == 7) ? 3 : 1}.${randomNumber(1, 9)}`;
        p.style.animation = `fadeOut ${time}s linear`;
        p.style.fontSize = '14px';
        if (stateMachine.check(TapeState.Leave))
        {
            if (i != 2)
            {
                p.style.color = 'white';
                p.style.textShadow = '2px 2px gray';
            }
            else
            {
                p.style.fontSize = '16px';
                p.style.color = 'darkred';
            }
        }
        dialogue.appendChild(p);
        time *= 1000;
        await timer(2000 + time);
    }

    sounds.pause(stateMachine.check(TapeState.Dead) ? SoundName.Baby : SoundName.Hiss);
    sounds.play(SoundName.TurnOff);
    document.getElementById("topbar").style.animation = "topOut 1.2s ease-out";
    document.getElementById("bottombar").style.animation = "bottomOut 1.2s ease-out";

    document.getElementById("topbar").style.top = 0;
    document.getElementById("bottombar").style.bottom = 0;
    document.addEventListener("animationend", function() 
    {
        document.location.href = "../../index.html";
        window.close();
    });
}

function punch(element)
{
    let elem = element;
    let punchInAnimation = (element.id == "punchRight") ? "punchInRight" : "punchInLeft"
    let punchOutAnimation = (element.id == "punchRight") ? "punchOutRight" : "punchOutLeft"
    
    elem.style.animation = `${punchInAnimation} 0.15s ease-in`;
    elem.addEventListener('animationend', () => 
    {
        sounds.play(SoundName.Punch)
        punching = (element.id == "punchRight") ? "left" : "right"
        breakScreen();
        sounds.play(`glass${randomNumber(1, 2)}`);
        if (tv.style.animation != "")
        {
            tv.style.animation = "";
        }
        elem.style.animation = `${punchOutAnimation} 0.6s ease-out`;
        if (punches >= shatter)
        {
            fade("out", "black", 1.5, "./killInside.html")
            tv.style.animation = "zoomIn 1.5s linear";
        }
        else
        {
            tv.style.animation = `
            shakeV${randomNumber(1, 4)} 
            ${(randomNumber(2, 3) / 10)}s 
            normal forwards linear`;
            elem.addEventListener('animationend', () => 
            {
                tv.style.animation = "";
                elem.style.animation = "";
            })
        }
    })
}

function breakScreen()
{
    if (punches == crack1)
    {
        sounds.play(SoundName.Hiss);
        tv.src = "../../resources/images/tv_1.png";
    }
    else if (punches == crack2)
    {
        sounds.play(SoundName.Drone);
        tv.src = "../../resources/images/tv_2.png";
    }
    else if (punches == crack3)
    {
        tv.src = "../../resources/images/tv_3.png";
    }
}

document.addEventListener('keyup', () => 
{
    keyDown = false;
})