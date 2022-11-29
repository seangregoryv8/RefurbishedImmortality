import { BODY, effect, face } from "../vhs_menu/src/globals.js";
import TapeState from "../src/enums/TapeState.js";
import { instructions_state } from "./main.js";
import { stateMachine } from "./globals.js";

export default class Finale
{
    error = false;
    exp = 2;
    faceInterval = null;
    tapes = 
    {
        eyes: false,
        heart: false,
        brain: false
    };

    prepareFirst()
    {
        face.height /= 100;
        let amountOfTrue = Object.values(this.tapes).reduce((a, item) => a + item, 0);
        if (amountOfTrue == 3)
        {
            this.error = true;
            face.style.visibility = 'visible';
            this.faceInterval = setInterval(this.increaseFace(), 600)
        }
        BODY.style.backgroundColor = "#12266d";
        document.getElementById("title").innerHTML = "H E L P M E";
        effect.createGlitches(amountOfTrue * 5);
        effect.none();
        effect.createStatic(amountOfTrue);
    }

    increaseFace()
    {
        face.height += 1.75 * this.exp;
        this.exp += 1;

        if (face.height >= 760)
        {
            stateMachine.set(TapeState.FaceFinale);
            BODY.style.backgroundColor = 'black';
            clearInterval(this.faceInterval);
            face.height = 760;
            effect.clearBoxes();
            error.style.visibility = "hidden";
            setTimeout(() => 
            {
                document.getElementById('staticNoise').style.animation = "fadeOut 2s linear";
                document.getElementById('vhs_overlay_div').style.animation = "fadeOut 2s linear";
                document.getElementById("tapes").style.animation = "fadeOutAll 2s linear";
                document.getElementById('staticNoise').addEventListener('animationend', () =>
                {
                    document.getElementById('staticNoise').style.opacity = 0.1;
                    document.getElementById('vhs_overlay_div').style.opacity = 0;
                    document.getElementById("tapes").style.opacity = 0;
                });

                setTimeout(() => 
                {
                    let lines = 
                    [
                        "...",
                        "...the pain...",
                        "...",
                        "...i don't remember you...",
                        "...please... save me...",
                        "let me go...",
                        "i wanna go to heaven",
                        "...see my mommy again...",
                        "...please...",
                        "..."
                    ]
                    let dialogue = document.getElementById("dialogue");
                    dialogue.backgroundColor = "black";
                    for (let i = 0; i < lines.length; i++)
                    {
                        setTimeout(function() 
                        {
                            dialogue.innerHTML = lines[i];
                        }, 3000 * i);
                    }
                    setTimeout(() => 
                    {
                        document.getElementById("topbar").style.animation = "topOut 1.2s ease-out";
                        document.getElementById("bottombar").style.animation = "bottomOut 1.2s ease-out";

                        document.getElementById("topbar").style.top = 0;
                        document.getElementById("bottombar").style.bottom = 0;
                        document.getElementById("topbar").addEventListener('animationend', function() 
                        {
                            stateMachine.set(TapeState.Choice);
                            localStorage.setItem("instructions", instructions_state);
                            document.location.href = "../vhs/tv.html";
                        });
                    }, 3000 * (lines.length + 1))
                }, 5000)
            }, 3000)
        }
    }

    checkForFinale(tape)
    {
        for (let key in this.tapes)
        {
            if (tape == key)
            {
                this.tapes[key] = true;
            }
        }
    }
}