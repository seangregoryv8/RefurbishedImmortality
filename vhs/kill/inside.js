import { randomNumber } from "./globals.js"


let f = document.getElementById("face");
let left = document.getElementById("leftbar")
let right = document.getElementById("rightbar")
let s = document.getElementById("staticNoise")
let v = document.getElementById("vhs_overlay")

let end = false;
let keyDown = false;
document.addEventListener('keydown', event => 
{
    if (!keyDown && !end)
    {
        keyDown = true;
        if (event.key == " ")
        {
            f.style.animation = `shakeExtreme ${(randomNumber(2, 3) / 10)}s normal forwards linear`;
            f.addEventListener('animationend', () => { f.style.animation = ""; });
            left.style.animation = `shakeExtreme ${(randomNumber(2, 3) / 10)}s normal forwards linear`;
            left.addEventListener('animationend', () => { left.style.animation = ""; });
            right.style.animation = `shakeExtreme ${(randomNumber(2, 3) / 10)}s normal forwards linear`;
            right.addEventListener('animationend', () => { right.style.animation = ""; });
            s.style.animation = `shakeExtreme ${(randomNumber(2, 3) / 10)}s normal forwards linear`;
            s.addEventListener('animationend', () => { s.style.animation = ""; });
            v.style.animation = `shakeExtreme ${(randomNumber(2, 3) / 10)}s normal forwards linear`;
            v.addEventListener('animationend', () => { v.style.animation = ""; });
        }
    }
})

document.addEventListener('keyup', () => 
{
    keyDown = false;
})

setTimeout(() => 
{
    $("#staticNoise").mgGlitch(
    {
        destroy : false,
        glitch: true,
        scale: true,
        blend : true,
        blendModeType : 'exclusion',
        glitch1TimeMin : 10,
        glitch1TimeMax : 65,
        glitch2TimeMin : 10,
        glitch2TimeMax : 115,
        zIndexStart : 0
    });
    $("#vhs_overlay").mgGlitch(
    {
        destroy : false,
        glitch: true,
        scale: true,
        blend : true,
        blendModeType : 'exclusion',
        glitch1TimeMin : 10,
        glitch1TimeMax : 65,
        glitch2TimeMin : 10,
        glitch2TimeMax : 115,
        zIndexStart : 0
    });
}, 3000)

let faceInterval = null;
setTimeout(() => 
{
    faceInterval = setInterval(function() 
    {
        f.style.left = Math.floor(Math.random() * 100) + 'vw';
        f.style.top = Math.floor(Math.random() * 100) + 'vh';
        f.style.width = Math.floor(Math.random() * 400) + 'px';
        f.style.height = Math.floor(Math.random() * 100) + 'px';
        f.style.backgroundPosition = Math.floor(Math.random() * 100) + 'px';
    });
}, 5000)

let leftInterval = null;
let rightInterval = null;

setTimeout(() => 
{
    leftInterval = setInterval(function() 
    {
        left.style.left = Math.floor(Math.random() * 100) + 'vw';
        left.style.top = Math.floor(Math.random() * 100) + 'vh';
        left.style.width = Math.floor(Math.random() * 400) + 'px';
        left.style.height = Math.floor(Math.random() * 100) + 'px';
        left.style.backgroundPosition = Math.floor(Math.random() * 100) + 'px';
    });
    rightInterval = setInterval(function() 
    {
        right.style.left = Math.floor(Math.random() * 100) + 'vw';
        right.style.top = Math.floor(Math.random() * 100) + 'vh';
        right.style.width = Math.floor(Math.random() * 400) + 'px';
        right.style.height = Math.floor(Math.random() * 100) + 'px';
        right.style.backgroundPosition = Math.floor(Math.random() * 100) + 'px';
    });
}, 6000)

setTimeout(() => 
{
    clearInterval(leftInterval);
    clearInterval(rightInterval);
    clearInterval(faceInterval);
    end = true;
    /*$(".glitch-img").mgGlitch(
        {
			destroy : true
        });*/
    let body = document.getElementsByTagName('body')[0];
    body.removeChild(document.getElementById("static_div"));
    body.removeChild(document.getElementById("vhs_overlay_div"));
    body.style.backgroundColor = 'white';
    setTimeout(() => 
    {
        document.getElementById("background").style.visibility = "visible";
        document.getElementById("broken").style.visibility = "visible";
    }, 70)

    setTimeout(() => 
    {
        let bar = document.createElement('div');
        bar.id = 'bar';
        bar.style.position = "fixed";
        bar.style.backgroundColor = 'white';
        bar.style.opacity = 0;
        bar.style.left = 0;
        bar.style.top = 0;
        bar.style.height = "100%";
        bar.style.width = "100%";
        bar.style.zIndex = 1;
        bar.style.animation = "fadeOut 3s linear";
        document.getElementsByTagName('body')[0].appendChild(bar);
        bar = document.getElementById('bar');

        bar.addEventListener('animationend', () => 
        {
            bar.style.opacity = 1;
            localStorage.setItem("state", "dead");
            document.location.href = "./kill.html";
        })
    }, 3000)
}, 10000)