import TapeState from "../../src/enums/TapeState.js";
import { stateMachine } from "../../src/globals.js";

let tv = document.getElementById("tv");
let left = document.getElementById("punchLeft");
let right = document.getElementById("punchRight");

let keyDown = false;
let punching = "right";
let punchAgain = true;
let punches = 0;

let crack1 = 1;
let crack2 = 2;
let crack3 = 3;
let shatter = 4;
document.addEventListener('keydown', event => 
{
    if (!keyDown)
    {
        keyDown = true;
        if (event.key == " " && punchAgain)
        {
            punchAgain = false;
            setTimeout(() => 
            {
                punchAgain = true;
            }, 600)
            punches++;
            if (punching == "right")
            {
                right.style.animation = "punchInRight 0.15s ease-in";
                right.addEventListener('animationend', () => 
                {
                    punching = "left";
                    breakScreen();
                    if (tv.style.animation != "")
                    {
                        tv.style.animation = "";
                    }

                    right.style.animation = "punchOutRight 0.6s ease-out";
                    if (punches >= shatter)
                    {
                        fade();

                        tv.style.animation = "zoomIn 1.2s linear";
                        tv.addEventListener('animationend', () => 
                        {
                            stateMachine.set(TapeState.Kill);
                            document.getElementById('bar').opacity = 1;
                            document.location.href = "./killInside.html";
                            murder2();
                        });
                    }
                    else
                    {
                        tv.style.animation = "shake 0.3s normal forwards linear";
                        right.addEventListener('animationend', () => 
                        {
                            tv.style.animation = "";
                            right.style.animation = "";
                        })
                    }
                })
            }
            if (punching == "left")
            {
                left.style.animation = "punchInLeft 0.15s ease-in";
                left.addEventListener('animationend', () => 
                {
                    punching = "right";
                    breakScreen();
                    if (tv.style.animation != "")
                    {
                        tv.style.animation = "";
                    }
                    left.style.animation = "punchOutLeft 0.6s ease-out";
                    if (punches >= shatter)
                    {
                        fade();
                        tv.style.animation = "zoomIn 1.2s linear";
                        tv.addEventListener('animationend', () => 
                        {
                            stateMachine.set(TapeState.Kill);
                            document.getElementById('bar').opacity = 1;
                            document.location.href = "./killInside.html";
                        });
                    }
                    else
                    {
                        tv.style.animation = "shake 0.3s normal forwards linear";
                        left.addEventListener('animationend', () => 
                        {
                            tv.style.animation = "";
                            left.style.animation = "";
                        })
                    }
                })
            }
        }
    }
})

function murder2()
{
    tv.style.visibility = "hidden";
    left.style.visibility = "hidden";
    right.style.visibility = "hidden";

    var head = document.getElementsByTagName('head')[0];

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'type/css';
    link.href = '../../main.css';

    head.appendChild(link);
}
function murder()
{
    document.getElementsByTagName('body')[0].style.backgroundColor = "#12266d";
    let bar = document.getElementById('bar');
    bar.zIndex = 0;

    let face = document.getElementById("face");
    face.style.visibility = "visible";

    tv.style.visibility = "hidden";
    left.style.visibility = "hidden";
    right.style.visibility = "hidden";

    let vhs_overlay_div = document.createElement('div');
    vhs_overlay_div.id = 'vhs_overlay_div';

    let vhs_overlay = document.createElement('img');
    vhs_overlay.id = 'vhs_overlay';
    vhs_overlay.draggable = false;

    vhs_overlay_div.appendChild(vhs_overlay);
    document.getElementsByTagName('body')[0].appendChild(vhs_overlay_div);
    let leftBar = document.createElement('div');
    leftBar.id = 'leftbar';
    leftBar.style.backgroundColor = 'black';
    leftBar.style.position = 'fixed';
    leftBar.style.left = 0;
    leftBar.style.top = 0;
    leftBar.style.width = "9%";
    leftBar.style.height = "100%";
    document.getElementsByTagName('body')[0].appendChild(leftBar);

    let rightBar = document.createElement('div');
    rightBar.id = 'rightbar';
    rightBar.style.backgroundColor = 'black';
    rightBar.style.position = 'fixed';
    rightBar.style.right = 0;
    rightBar.style.top = 0;
    rightBar.style.width = "9%";
    rightBar.style.height = "100%";
    document.getElementsByTagName('body')[0].appendChild(rightBar);
}

function fade()
{
    let bar = document.createElement('div');
    bar.id = 'bar';
    bar.style.position = "fixed";
    bar.style.backgroundColor = 'black';
    bar.style.opacity = 0;
    bar.style.left = 0;
    bar.style.top = 0;
    bar.style.height = "100%";
    bar.style.width = "100%";
    bar.style.zIndex = 1;
    bar.style.animation = "fadeOut 1.2s linear";
    document.getElementsByTagName('body')[0].appendChild(bar);
}

function breakScreen()
{
    if (punches == crack1)
    {
        tv.src = "./tv_1.png";
    }
    else if (punches == crack2)
    {
        tv.src = "./tv_2.png";
    }
    else if (punches == crack3)
    {
        tv.src = "./tv_3.png";
    }
}

document.addEventListener('keyup', () => 
{
    keyDown = false;
})

window.onbeforeunload = function() 
{
    stateMachine.set(TapeState.Kill);
}