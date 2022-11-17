import Effect from "./Effect.js";
export const effect = new Effect();

import Videos from "./Videos.js";
export const videos = new Videos();

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
        let ul = document.getElementById("tapes");

        for (let i = 0; i < tapesJSON.length; i++)
        {
            let tape = tapesJSON[i]
            let li = document.createElement('li');
            li.id = tape;
            let a = document.createElement('a');
            a.innerHTML = tape.substring(tape.indexOf("/") + 1, tape.indexOf(".mp4"));
            //console.log(a.innerHTML);
            li.appendChild(a);
            ul.appendChild(li);
        }
        
        //console.log(tapes);
        tapes = new Tapes();
    
        for (let i = 0; i < tapes.getTapeLength(); i++)
        {
            let id = tapes.all[i].id;
            let a = tapes.all[i].getElementsByTagName("a")[0]
    
            a.href = "../vhs_video/video.html";
    
            //tapes.all[i].href
            if (i % 2 == 0 && i != 0)
            {
                tapes.adjustIndex();
                tapes.makeIndex();
            }
        }
    })
});

export let tapes;
export const MAIN = "../../tapes";