import Effect from "./Effect.js";
export const effect = new Effect();

import Videos from "./Videos.js";
export const videos = new Videos();

export const TAPES = document.getElementById("tapes");
export const TAPEINDEX = document.getElementById("tapeIndex");
import Tapes from "./Tapes.js";

addEventListener('load', function() 
{
    fetch("../menu.php")
    .then(response => response.json())
    .then(body => 
    {
        let tapesJSON = [];
        for (let i = 0; i < body.length; i++)
        {
            tapesJSON[i] = body[i].replaceAll("\\", "/");
            tapesJSON[i] = tapesJSON[i].substring(8, tapesJSON[i].length);
        }
        
        //console.log(tapes);
        tapes = new Tapes(tapesJSON);
    })
});

export let tapes;
export const MAIN = "../../tapes";