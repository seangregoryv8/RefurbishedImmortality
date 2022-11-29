import { randomNumber } from "./globals.js"

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
                punch(right);
            }
            if (punching == "left")
            {
                punch(left);
            }
        }
    }
})

function punch(element)
{
    let elem = element;
    let punchInAnimation = (element.id == "punchRight") ? "punchInRight" : "punchInLeft"
    let punchOutAnimation = (element.id == "punchRight") ? "punchOutRight" : "punchOutLeft"
    
    elem.style.animation = `${punchInAnimation} 0.15s ease-in`;
    elem.addEventListener('animationend', () => 
    {
        punching = (element.id == "punchRight") ? "left" : "right"
        breakScreen();
        if (tv.style.animation != "")
        {
            tv.style.animation = "";
        }
        elem.style.animation = `${punchOutAnimation} 0.6s ease-out`;
        if (punches >= shatter)
        {
            fade();
            tv.style.animation = "zoomIn 1.2s linear";
            tv.addEventListener('animationend', () => 
            {
                document.getElementById('bar').opacity = 1;
                document.location.href = "./killInside.html";
            });
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