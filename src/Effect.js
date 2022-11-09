import Controls from "./enums/Controls.js";
import { action, BODY, DEBUG, getRandomNumber, video } from "./globals.js";

export default class Effect
{
    damage_light = "./resources/vhs_overlay_2.gif";
    damage_heavy = "./resources/vhs_overlay_1.gif";

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
    roll(ctl = Controls.Play)
    {
        // Make a roller for different effects that could happen
        switch (ctl)
        {
            case Controls.Stop:
                Math.random(0, 30)
        }
    }

    none()
    {
        if (!DEBUG)
            document.getElementById("vhs_overlay_div").style.visibility = 'hidden';
    }
    light()
    {
        if (!DEBUG)
        {
            document.getElementById("vhs_overlay").src = this.damage_light;
            document.getElementById("vhs_overlay_div").style.visibility = 'visible';
        }
    }
    heavy()
    {
        if (!DEBUG)
        {
            document.getElementById("vhs_overlay").src = this.damage_heavy;
            document.getElementById("vhs_overlay_div").style.visibility = 'visible';
        }
    }

    blackEffectHeavy()
    {
        BODY.style.backgroundColor = 'black';
        video.video.style.visibility = 'hidden';
        setTimeout(function()
        {
            BODY.style.backgroundColor = '#1e3aa4';
            video.video.style.visibility = 'visible';
        }, getRandomNumber(1200, 2500));
    }
    blackEffectLight()
    {
        if (!action.stay)
        {
            BODY.style.backgroundColor = 'black';
            video.video.style.visibility = 'hidden';
            setTimeout(function()
            {
                BODY.style.backgroundColor = '#1e3aa4';
                video.video.style.visibility = 'visible';
            }, getRandomNumber(400, 1000));
        }
    }
}