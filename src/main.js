import 
{
    dateTime,
    effect,
    action,
    keys,
    getVideoTitle
} from "./globals.js"

effect.rollStatic();

// Make it so that pressing rewind on loading the page and pressing rewind again causes a major glitch to occur
// Other idea: Use a captcha as per normal, then make every image this weird and creepy hybrid of a computer with "pick all the humans" or something, and end with a visual glitch jumpscare

// Make it so that there's a small delay before you fast forward and rewind, like a setTimeout where afterwards I put in the interval

document.getElementById("time").innerHTML = dateTime.getTime();
document.getElementById("currentDate").innerHTML = dateTime.getDate();
document.getElementById("control").innerHTML = action.symbol;

document.addEventListener('keydown', event => 
{
    keys.allValues(event);
    document.getElementById("control").innerHTML = action.symbol;
});

setInterval(function() 
{
    document.getElementById("time").innerHTML = dateTime.getTime();
    document.getElementById("currentDate").innerHTML = dateTime.getDate();    
}, 1000);

document.title = getVideoTitle();

//document.title = video.video

// Email: computation.lab@concordia.ca