import { action, BODY, video } from "./globals.js";

export default class Damage
{
    damage_light = "./resources/vhs_overlay_2.gif";
    damage_heavy = "./resources/vhs_overlay_1.gif";

    none()
    {
        document.getElementById("vhs_overlay_div").style.visibility = 'hidden';
    }
    light()
    {
        document.getElementById("vhs_overlay").src = this.damage_light;
        document.getElementById("vhs_overlay_div").style.visibility = 'visible';
    }
    heavy()
    {
        document.getElementById("vhs_overlay").src = this.damage_heavy;
        document.getElementById("vhs_overlay_div").style.visibility = 'visible';
    }

    blackEffect()
    {
        BODY.style.backgroundColor = 'black';
        video.video.style.visibility = 'hidden';
        action.STOP = true;
        setTimeout(function()
        {
            BODY.style.backgroundColor = '#1e3aa4';
            video.video.style.visibility = 'visible';
            action.STOP = false;
        }, 2500);
    }
}
