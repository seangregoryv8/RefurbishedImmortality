import { body, fade, randomNumber } from "./src/globals.js";
import { createBars, createGlitches, createOverlay, createStatic } from "./src/vhsEffect.js";

localStorage.clear();
let glitchAudio = new Audio(`./resources/sound/glitches/glitch${randomNumber(1, 6)}.mp3`)
glitchAudio.load();
localStorage.setItem("state", 'regular')


function hide()
{
    body.style.backgroundColor = "black";

    document.getElementById("github").style.opacity = 0;
    document.getElementById('email').style.opacity = 0;
}

function show()
{
    body.style.backgroundColor = "#1e3aa4";

    document.getElementById("github").style.opacity = 1;
    document.getElementById('email').style.opacity = 1;
}

function fadeScreen(text, func)
{
    hide();
    
    document.getElementById("text_overlay").innerHTML = text;

    fade("in", "black", 1.5);

    setTimeout(() => 
    {
        let interval = setTimeout(() => 
        {
            fadeToTitleScreen("", func);
        }, 3000)
    
        document.addEventListener('keydown', () => 
        {
            fadeToTitleScreen(interval, func)
        }, { once: true });
    }, 1500)
}

function fadeToTitleScreen(interval, func)
{
    if (interval != "")
        clearInterval(interval);
    fade("out", "black", 1.5)
    setTimeout(() => 
    {
        document.getElementById("text_overlay").innerHTML = "";
        func();
    }, 1500)
}

function titleScreen()
{
    document.getElementById("text_overlay").innerHTML = "REFURBISHED IMMORTALITY (Beta)";
    document.getElementById("text_overlay").style.fontSize = "48px";
    createBars();
    createStatic();
    createOverlay("./resources/images/vhs_overlays/2.gif");
    createGlitches(20);

    show();
    setTimeout(() => 
    {
        glitchInterval = setInterval(set, 50)
    }, randomNumber(1000, 2000))
    
    document.addEventListener('keydown', (event) => 
    {
        if (event.key == "Enter" || event.key == " ")
        {
            fade("out", "black", 2, "./vhs/tv.html", true);
        }
    })
}

let glitch = document.getElementsByClassName('box');
let x = 0;
let glitchInterval;

function set()
{
    glitchAudio.play();
    if (x >= randomNumber(10, 30))
        clear();
    for (let i = 0; i < glitch.length; i++)
    {
        glitch[i].style.left = randomNumber(1, 100) + 'vw';
        glitch[i].style.top = randomNumber(1, 100) + 'vh';
        glitch[i].style.width = randomNumber(1, 400) + 'px';
        glitch[i].style.height = randomNumber(1, 100) + 'px';
    }
    x++;
}

function clear()
{
    glitchAudio.pause();
    glitchAudio = new Audio(`./resources/sound/glitches/glitch${randomNumber(1, 6)}.mp3`)
    glitchAudio.load();
    x = 0;
    for (let i = 0; i < glitch.length; i++)
    {
        glitch[i].style.visibility = 'hidden';
    }
    clearInterval(glitchInterval)
    setTimeout(() =>
    {
        for (let i = 0; i < glitch.length; i++)
        {
            glitch[i].style.visibility = 'visible';
        }
        glitchInterval = setInterval(set, 50);
    }, randomNumber(1000, 5000));
}

hide();
setTimeout(() => 
{
    fadeScreen("WARNING!<br><br>May contain some flashing lights and mature topics. Viewer discretion is advised...", titleScreen);
}, 1500)


/*

        Refurbished Immortality: The ReAnimated Tapes
        <br>
        By Sean Gregory
        <br><br>
        For optimal immersive experience, please refrain from using the browser arrow keys or the refresh button...
        <br><br>
        Use keyboard arrows to navigate. Instructions can be viewed on the bottom right...
        <br><br>
        <br><br>
        Press spacebar or enter to continue...
        <br>
*/