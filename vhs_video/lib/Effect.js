import SoundName from "../../src/enums/SoundName.js";
import TapeState from "../../src/enums/TapeState.js";
import { finale, sounds, stateMachine } from "../../src/globals.js";
import { instructions_state } from "../../src/main.js";
import { action, BODY, changeControl, DEBUG, getRandomNumber, video } from "../src/globals.js";

export default class Effect
{
    damage_light = "../vhs_overlays/2.gif";
    damage_heavy = "../vhs_overlays/1.gif";

    constructor()
    {
        this.activeEffect = false;
    }

    /**
     * 
     * @param {Function} func 
     */
    rollTrue(func, max = 1)
    {
        if (getRandomNumber(max + 1) == max)
            func();
    }

    rollTruePure(max = 1)
    {
        return getRandomNumber(max + 1) == max;
    }

    rollStatic()
    {
        switch (Math.floor(Math.random() * 3))
        {
            case 0:
                this.none();
                break;
            case 1:
                this.light();
                break;
            case 2:
                this.heavy();
                break;
        }
    }

    none()
    {
        if (!DEBUG && !stateMachine.check(TapeState.Finale))
            document.getElementById("vhs_overlay_div").style.visibility = 'hidden';
    }
    light()
    {
        if (!DEBUG && !stateMachine.check(TapeState.Finale))
        {
            document.getElementById("vhs_overlay").src = this.damage_light;
            document.getElementById("vhs_overlay_div").style.visibility = 'visible';
        }
    }
    heavy()
    {
        if (!DEBUG && !stateMachine.check(TapeState.Finale))
        {
            document.getElementById("vhs_overlay").src = this.damage_heavy;
            document.getElementById("vhs_overlay_div").style.visibility = 'visible';
        }
    }

    blackEffectHeavy()
    {
        BODY.style.backgroundColor = 'black';
        video.video.style.visibility = 'hidden';
        action.untouchable = true;
        setTimeout(function()
        {
            BODY.style.backgroundColor = '#1e3aa4';
            video.video.style.visibility = 'visible';
            action.untouchable = false;
        }, getRandomNumber(1200, 2500));
    }
    
    blackEffectLight()
    {
        if (!action.stay)
        {
            BODY.style.backgroundColor = 'black';
            video.video.style.visibility = 'hidden';
            action.untouchable = true;
            setTimeout(function()
            {
                BODY.style.backgroundColor = '#1e3aa4';
                video.video.style.visibility = 'visible';
                action.untouchable = false;
            }, getRandomNumber(400, 1000));
        }
    }

    troubleEjecting(time, black = true, img)
    {
        changeControl("Trouble Ejecting");
        setTimeout(function()
        {
            sounds.play(SoundName.GlitchLong);
            let bg = document.getElementsByTagName('body')[0];
            let count = 20;
            for (let i = 0; i < count; i++)
            {
                let glitchBox = document.createElement('div')
                glitchBox.className = 'box';
                bg.appendChild(glitchBox);
            }
            let glitch = document.getElementsByClassName('box');
    
            setInterval(function() 
            {
                for (let i = 0; i < glitch.length; i++)
                {
                    if (!black) glitch[i].style.backgroundColor = 'white';
                    glitch[i].style.left = Math.floor(Math.random() * 100) + 'vw';
                    glitch[i].style.top = Math.floor(Math.random() * 100) + 'vh';
                    glitch[i].style.width = Math.floor(Math.random() * 400) + 'px';
                    glitch[i].style.height = Math.floor(Math.random() * 100) + 'px';
                    glitch[i].style.backgroundPosition = Math.floor(Math.random() * 100) + 'px';
                }
                let ctl = document.getElementById("control").style;
                ctl.left = Math.floor(Math.random() * 100) + 'vw';
                ctl.top = Math.floor(Math.random() * 100) + 'vh';
                if (img != null)
                {
                    img.style.left = Math.floor(Math.random() * 100) + 'vw';
                    img.style.top = Math.floor(Math.random() * 100) + 'vh';
                }
            }, 50)
            setTimeout(function() 
            {
                localStorage.setItem("instructions", instructions_state);
                document.location.href = "../vhs_menu/menu.html"
            }, getRandomNumber(100, 2000))
        }, time)
    }
}