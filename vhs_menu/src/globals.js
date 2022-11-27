import TapeState from "../../src/enums/TapeState.js";
import { stateMachine } from "../../src/globals.js";

import Effect from "./Effect.js";
export const effect = new Effect();

export const BODY = document.getElementsByTagName('body')[0]
export const TAPES = document.getElementById("tapes");
export const TAPEINDEX = document.getElementById("tapeIndex");
import Tapes from "./Tapes.js";

addEventListener('load', function() 
{
    if (window.location.href.includes("vhs_menu"))
    {
        fetch("../getTapes.php")
        .then(response => response.json())
        .then(body => 
        {
            let tapesJSON = [];
            for (let i = 0; i < body.length; i++)
            {
                let t = body[i].replaceAll("\\", "/");
                t = t.substring(8, t.length);
                if (stateMachine.check(TapeState.Finale))
                {
                    if (t.includes(TapeState.Finale))
                        tapesJSON.push(t);
                }
                else
                {
                    if (!t.includes(TapeState.Finale))
                        tapesJSON.push(t);
                }
            }
            
            tapes = new Tapes(tapesJSON);
        })
    }
});

export let tapes;
export const MAIN = "../../tapes";

export const face = document.getElementById("face");
export const error = document.getElementById('error');

export function randomString(length)
{
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++)
    {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
