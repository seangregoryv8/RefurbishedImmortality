import { body } from "./globals.js";

let vhs_overlay_div = document.createElement('div');
vhs_overlay_div.id = 'vhs_overlay_div';

let vhs_overlay = document.createElement('img');
vhs_overlay.id = 'vhs_overlay';
vhs_overlay.draggable = false;

vhs_overlay_div.appendChild(vhs_overlay);
body.appendChild(vhs_overlay_div);

let static_div = document.createElement('div');
static_div.id = 'static_div';

let staticNoise = document.createElement('img');
staticNoise.id = 'staticNoise';
staticNoise.draggable = false;
staticNoise.style.opacity = 0;

static_div.appendChild(staticNoise);
body.appendChild(static_div);

let leftBar = document.createElement('div');
leftBar.id = 'leftbar';
body.appendChild(leftBar);

let rightBar = document.createElement('div');
rightBar.id = 'rightbar';
body.appendChild(rightBar);

let instructions_img = document.createElement('img');
instructions_img.id = 'instructions_img';
instructions_img.src = "../resources/images/instructions-2.png";
instructions_img.draggable = false;
body.appendChild(instructions_img);