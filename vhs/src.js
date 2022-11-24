import { instructions_state, changeInstructions } from "../all.js";
import { fadeInBlue, fadeOutBlue } from "./globals.js";

changeInstructions(localStorage.getItem("instructions"))

let tv = document.getElementById("tv");
let tv_state;
tv.style.animation = "zoomOut 1.2s ease-out";

fadeInBlue();

document.addEventListener('keydown', event => 
{
    switch (event.key)
    {
        case " ":
            changeTV(tv_state);
            break;
        case "Enter":
            if (tv_state == "on")
            {
                fadeOutBlue();
                tv.style.animation = "zoomIn 1s linear";
                tv.addEventListener('animationend', () => 
                {
                    localStorage.setItem("instructions", instructions_state)
                    document.location.href = "../vhs_menu/menu.html";
                });
            }
    }
})

function changeTV(state)
{
    switch (state)
    {
        case "on":
            tv_state = "off";
            tv.src = "./tv_off.png";
            break;
        case "off":
            tv_state = "on";
            tv.src = "./tv_on.png";
            break;
    }
}

changeTV("on")