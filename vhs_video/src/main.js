import 
{
    dateTime,
    effect,
    action,
    keys,
    getVideoTitle,
    changeControl
} from "./globals.js"

effect.rollStatic();
action.untouchable = false;

// Make it so that pressing rewind on loading the page and pressing rewind again causes a major glitch to occur

// Make it so that there's a small delay before you fast forward and rewind, like a setTimeout where afterwards I put in the interval

// Other idea: Add an options page for people to know how to navigate

document.getElementById("time").innerHTML = dateTime.getTime();
document.getElementById("currentDate").innerHTML = dateTime.getDate();
changeControl(action.symbol);

document.addEventListener('keydown', event => 
{
    keys.allValues(event);
    changeControl(action.symbol);
});

setInterval(function() 
{
    document.getElementById("time").innerHTML = dateTime.getTime();
    document.getElementById("currentDate").innerHTML = dateTime.getDate();    
}, 1000);

document.title = getVideoTitle();

// Email: computation.lab@concordia.ca