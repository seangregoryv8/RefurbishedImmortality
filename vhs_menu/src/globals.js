import Effect from "./Effect.js";
export const effect = new Effect();

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
            let t = body[i].replaceAll("\\", "/");
            t = t.substring(8, t.length);
            if (this.localStorage.getItem('state') == 'finale')
            {
                if (t.includes('finale'))
                    tapesJSON.push(t);
            }
            else
            {
                if (!t.includes('finale'))
                    tapesJSON.push(t);
            }
        }
        
        tapes = new Tapes(tapesJSON);
    })
});

export let tapes;
export const MAIN = "../../tapes";