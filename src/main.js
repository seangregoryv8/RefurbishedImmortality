import 
{
    dateTime,
    damage,
    interval,
    action,
    keys
} from "./globals.js"
import Video from "./Video.js";

damage.light();

// Make it so that pressing rewind on loading the page and pressing rewind again causes a major glitch to occur
// Other idea: Use a captcha as per normal, then make every image this weird and creepy hybrid of a computer with "pick all the humans" or something, and end with a visual glitch jumpscare

console.log(Math.floor(Math.random()))
// Make it so that there's a small delay before you fast forward and rewind, like a setTimeout where afterwards I put in the interval

document.getElementById("time").innerHTML = dateTime.getTime();
document.getElementById("currentDate").innerHTML = dateTime.getDate();

document.getElementById("control").innerHTML = action.symbol;

let video = new Video("https://www.youtube.com/watch?v=9bZkp7q19f0");

document.addEventListener('keydown', event => 
{
    keys.allValues(event);
    document.getElementById("control").innerHTML = action.symbol;
});

interval.setTime();