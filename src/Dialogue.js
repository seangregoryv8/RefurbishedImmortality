import { body } from "./globals.js";

export default class Dialogue
{
    timer = ms => new Promise(res => setTimeout(res, ms));

    constructor(text, type, color, length = null)
    {
        this.text = text;
        this.type = type;
        this.speech = document.createElement("p");
        this.speech.id = "speech";
        this.style = document.getElementsByTagName('head')[0].getElementsByTagName('style')[0];
        this.oldStyle = this.style.innerHTML;

        console.log(text.split(""))

        this.create(color, length);
    }
    create(color, length)
    {
        this.speech.style.textDecoration = "none";
        this.speech.style.fontSize = "48px";
        this.speech.style.fontFamily = "Vhs";
        this.speech.style.color = color;
        this.speech.style.textShadow = "4px 4px black";
        this.speech.style.textAlign = "center";
        this.speech.style.position = "fixed";
        this.speech.style.bottom = "0%";
        this.speech.style.left = "50%";
        this.speech.style.transform = "translate(-50%, -50%)";
        this.speech.style.opacity = 0;
        this.style.innerHTML += 
        `\
        @keyframes fadeIn {\
            0% { opacity: 0; }\
            100% { opacity: 1; }\
        }`;
        this.style.innerHTML += 
        `\
        @keyframes fadeOut {\
            0% { opacity: 1; }\
            100% { opacity: 0; }\
        }`;

        body.appendChild(this.speech);

        this.speech = document.getElementById("speech");
        switch (this.type)
        {
            case "fade":
                this.fade();
                break;
            case "typeOut":
                this.speech.style.opacity = 1;
                this.typeOut(length);
                break;
        }
    }

    async typeOut(length)
    {
        this.text = this.text.split("");

        let index = 0;
        while (index < this.text.length)
        {
            console.log(index);
            this.speech.innerHTML += this.text[index];
            await this.timer(length);
            index++;
        }
        await this.timer(3000);
        this.speech.style.animation = 'fadeOut 1.5s linear';

        this.speech.addEventListener("animationend", () => 
        {
            this.speech.style.opacity = 0;
            this.delete();
        })
    }

    async fade()
    {
        this.speech.innerHTML = this.text;
        this.speech.style.animation = 'fadeIn 1.5s linear';
        this.speech.addEventListener("animationend", () => 
        {
            this.speech.style.opacity = 1;

            setTimeout(() => 
            {
                this.speech.style.animation = 'fadeOut 1.5s linear';

                this.speech.addEventListener("animationend", () => 
                {
                    this.speech.style.opacity = 0;
                    this.delete();
                })
            }, 3000)
        })
    }

    delete()
    {
        this.style.innerHTML = this.oldStyle;
        this.speech.remove();
    }
}