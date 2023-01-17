import { fadeToBlack } from "./src/globals.js";

localStorage.clear();
let glitchAudio = new Audio(`./resources/sound/glitches/glitch${Math.floor(Math.random() * (6 - 1 + 1) + 1)}.mp3`)
glitchAudio.load();
localStorage.setItem("state", 'regular')
document.addEventListener('keydown', (event) => 
{
    if (event.key == "Enter" || event.key == " ")
    {
        fadeToBlack("./vhs/tv.html");
    }
})

let bg = document.getElementsByTagName('body')[0];
let count = 20;
for (let i = 0; i < count; i++)
{
    let glitchBox = document.createElement('div')
    glitchBox.className = 'box';
    bg.appendChild(glitchBox);
}
let glitch = document.getElementsByClassName('box');
let x = 0;
let glitchInterval;
setTimeout(() => 
{
    glitchInterval = setInterval(set, 50)
}, 2000)
let randomAmount = Math.floor(Math.random() * 30) + 10;

function set()
{
    glitchAudio.play();
    if (x == randomAmount)
        clear();
    for (let i = 0; i < glitch.length; i++)
    {
        glitch[i].style.left = Math.floor(Math.random() * 100) + 'vw';
        glitch[i].style.top = Math.floor(Math.random() * 100) + 'vh';
        glitch[i].style.width = Math.floor(Math.random() * 400) + 'px';
        glitch[i].style.height = Math.floor(Math.random() * 100) + 'px';
    }
    x++;
}

function clear()
{
    glitchAudio.pause();
    glitchAudio = new Audio(`./resources/sound/glitches/glitch${Math.floor(Math.random() * (6 - 1 + 1) + 1)}.mp3`)
    glitchAudio.load();
    x = 0;
    for (let i = 0; i < glitch.length; i++)
    {
        glitch[i].style.visibility = 'hidden';
    }
    clearInterval(glitchInterval)
    let t = Math.floor((Math.random() * 5000) + 1000);
    setTimeout(function() 
    {
        randomAmount = Math.floor(Math.random() * 30) + 10;
        for (let i = 0; i < glitch.length; i++)
        {
            glitch[i].style.visibility = 'visible';
        }
        glitchInterval = setInterval(set, 50);
    }, t);
}