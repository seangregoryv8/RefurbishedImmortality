import Controls from "./enums/Controls.js";
import { BODY, DEBUG, video } from "./globals.js";

export default class Damage
{
    damage_light = "./resources/vhs_overlay_2.gif";
    damage_heavy = "./resources/vhs_overlay_1.gif";

    constructor()
    {
        this.activeEffect = false;
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

    blackEffect()
    {
        BODY.style.backgroundColor = 'black';
        video.video.style.visibility = 'hidden';
        this.activeEffect = true;
        setTimeout(function()
        {
            this.activeEffect = false;
            console.log("HIT")
            BODY.style.backgroundColor = '#1e3aa4';
            video.video.style.visibility = 'visible';
        }, 2500);
    }
}