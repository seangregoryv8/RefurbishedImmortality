import { body } from "../../src/globals.js";

export default class Effect
{
    damage_light = "../resources/images/vhs_overlays/2.gif";
    damage_heavy = "../resources/images/vhs_overlays/1.gif";
    staticNoise = "../resources/images/vhs_overlays/static.gif"

    constructor()
    {
        this.activeEffect = false;
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
    createStatic(amount)
    {
        document.getElementById("staticNoise").src = this.staticNoise;
        document.getElementById("staticNoise").style.opacity =
        (amount == 1) ? 0.3 : 
        (amount == 2) ? 0.5 : 
        (amount == 3) ? 0.8 : 0.1;
    }

    boxInterval = null;

    createGlitches(amount)
    {
        let count = amount;
        for (let i = 0; i < count; i++)
        {
            let glitchBox = document.createElement('div')
            glitchBox.className = 'box';
            body.appendChild(glitchBox);
        }
        let glitch = document.getElementsByClassName('box');

        this.boxInterval = setInterval(function() 
        {
            for (let i = 0; i < glitch.length; i++)
            {
                glitch[i].style.left = Math.floor(Math.random() * 100) + 'vw';
                glitch[i].style.top = Math.floor(Math.random() * 100) + 'vh';
                glitch[i].style.width = Math.floor(Math.random() * 400) + 'px';
                glitch[i].style.height = Math.floor(Math.random() * 100) + 'px';
                glitch[i].style.backgroundPosition = Math.floor(Math.random() * 100) + 'px';
            }
        }, 50)
    }
    clearBoxes()
    {
        clearInterval(this.boxInterval);

        const boxes = document.querySelectorAll('.box');

        boxes.forEach(box => 
            {
                box.remove();
            })
    }
}