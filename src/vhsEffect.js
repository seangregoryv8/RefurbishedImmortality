import { body } from "./globals.js";

export function createBars()
{
    let leftBar = document.createElement('div');
    leftBar.id = 'leftbar';
    leftBar.style.backgroundColor = "black";
    leftBar.style.position = "fixed"
    leftBar.style.top = 0;
    leftBar.style.left = 0;
    leftBar.style.width = "9%";
    leftBar.style.height = "100%";
    leftBar.style.zIndex = 1;
    body.appendChild(leftBar);
    
    let rightBar = document.createElement('div');
    rightBar.id = 'rightbar';
    rightBar.style.backgroundColor = "black";
    rightBar.style.position = "fixed"
    rightBar.style.top = 0;
    rightBar.style.right = 0;
    rightBar.style.width = "9%";
    rightBar.style.height = "100%";
    rightBar.style.zIndex = 1;
    body.appendChild(rightBar);
}

export function createOverlay(src = null)
{
    let vhs_overlay_div = document.createElement('div');
    vhs_overlay_div.id = 'vhs_overlay_div';

    let vhs_overlay = document.createElement('img');
    vhs_overlay.id = 'vhs_overlay';
    vhs_overlay.draggable = false;
    if (src != null)
    {
        vhs_overlay.src = src;
    }
    
    vhs_overlay.style.position = "fixed";
    vhs_overlay.style.left = 0;
    vhs_overlay.style.top = 0;
    vhs_overlay.style.width = "100%";
    vhs_overlay.style.height = "100%";
    vhs_overlay.style.objectFit = "fill";

    vhs_overlay_div.appendChild(vhs_overlay);
    body.appendChild(vhs_overlay_div);
}

export function createStatic()
{
    let static_div = document.createElement('div');
    static_div.id = 'static_div';

    let staticNoise = document.createElement('img');
    staticNoise.id = 'staticNoise';
    staticNoise.draggable = false;
    staticNoise.style.opacity = 0;
    
    staticNoise.style.position = "fixed";
    staticNoise.style.left = 0;
    staticNoise.style.top = 0;
    staticNoise.style.width = "100%";
    staticNoise.style.height = "100%";
    staticNoise.style.objectFit = "fill";

    static_div.appendChild(staticNoise);
    body.appendChild(static_div);
}

export function createInstructions()
{
    let instructions_img = document.createElement('img');
    instructions_img.id = 'instructions_img';
    instructions_img.src = "../resources/images/instructions-2.png";
    instructions_img.draggable = false;
    body.appendChild(instructions_img);
}