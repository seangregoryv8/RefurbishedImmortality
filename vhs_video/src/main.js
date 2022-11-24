import 
{
    dateTime,
    effect,
    action,
    getVideoTitle,
    changeControl
} from "./globals.js"
import { instructions_state, changeInstructions } from "../../all.js";

changeInstructions(localStorage.getItem("instructions"))

effect.rollStatic();
action.untouchable = false;

// Make it so that pressing rewind on loading the page and pressing rewind again causes a major glitch to occur

// Make it so that there's a small delay before you fast forward and rewind, like a setTimeout where afterwards I put in the interval

// Other idea: Add an options page for people to know how to navigate

document.getElementById("time").innerHTML = dateTime.getTime();
document.getElementById("currentDate").innerHTML = dateTime.getDate();
changeControl(action.symbol);

let keyDown = false;

document.addEventListener('keydown', event => 
{
    if (!keyDown && !action.untouchable)
    {
        keyDown = true;
        switch (event.key)
        {
            case "R":
            case "r":
                action.record();
                break;
            case "Backspace":
            case "Delete":
                action.delete();
                break;
            case "Escape":
                action.escape();
                break;
            case " ":
            case "Enter":
                action.spacebar();
                break;
            case "ArrowRight":
                action.left();
                break;
            case "ArrowLeft":
                action.right();
                break;
            case "ArrowUp":
            case "ArrowDown":
                action.volume(event.key)
                break;
        }
    }
    changeControl(action.symbol);
});

document.addEventListener('keyup', event => 
{
    keyDown = false;
})

setInterval(function() 
{
    document.getElementById("time").innerHTML = dateTime.getTime();
    document.getElementById("currentDate").innerHTML = dateTime.getDate();    
}, 1000);

document.title = getVideoTitle();

localStorage.setItem('previousTape', document.title);

// Email: computation.lab@concordia.ca