import { TAPEINDEX, TAPES } from "./globals.js";

export default class Tapes
{
    formList(json)
    {
        let ul = document.getElementById("tapes");

        for (let i = 0; i < json.length; i++)
        {
            let tape = json[i];
            let li = document.createElement('li');
            li.id = tape;
            li.draggable = false;
            let a = document.createElement('a');
            a.draggable = false;
            if (tape.includes("finale"))
            {
                a.innerHTML = tape.substring(tape.indexOf("/") + 1, tape.indexOf("."));
            }
            else
                a.innerHTML = tape.substring(tape.indexOf("/") + 1, tape.indexOf(".mp4"));
            //console.log(a.innerHTML);
            li.appendChild(a);
            ul.appendChild(li);
        }
    }
    constructor(json)
    {
        this.formList(json)
        this.maxTapesPerPage = 5;
        this.currentTape = 0;
        this.index = TAPEINDEX;
        this.currentIndex = 0;
        let allTapes = TAPES.children;
        this.all = [];
        let tapeIndex = 0;
        this.indices = 0;
        this.all[this.indices] = [];
        this.makeIndex();
        for (let i = 0; i < allTapes.length; i++)
        {
            let a = allTapes[i].getElementsByTagName("a")[0]
            a.href = "../vhs_video/video.html";
            if (tapeIndex == this.maxTapesPerPage)
            {
                tapeIndex = 0;
                this.adjustIndex();
                this.all[this.indices] = [];
                this.makeIndex();
            }
            let tape = allTapes[i];
            this.all[this.indices][tapeIndex] = tape;
            tapeIndex++;
        }
        this.currentDisplay = this.all[0];

        this.activate();
        this.changeTapes();
    }

    getTape()
    {
        return this.currentDisplay[this.currentTape];
    }

    changeTapes()
    {
        this.currentDisplay = this.all[this.currentIndex];
        while (TAPES.children.length != 0)
        {
            TAPES.removeChild(TAPES.lastChild);
        }
        for (let i = 0; i < this.currentDisplay.length; i++)
        {
            TAPES.appendChild(this.currentDisplay[i]);
        }
    }

    makeIndex()
    {
        let li = document.createElement('li');
        li.innerHTML = this.indices + 1;
        this.index.appendChild(li);
    }

    adjustIndex()
    {
        this.indices++;
    }

    getTapeLength()
    {
        return this.all.length;
    }

    getCurrentTape()
    {
        return this.all[this.currentTape];
    }

    getCurrentIndex()
    {
        return this.currentIndex;
    }

    down()
    {

        if (this.currentTape == this.currentDisplay.length - 1)
        {
            if (this.currentIndex != this.indices)
            {
                this.currentIndex++;
                this.changeTapes();
                this.currentTape = 0;
            }
        }
        else
            this.currentTape++;

        this.activate();
    }
    up()
    {
        if (this.currentTape == 0)
        {
            if (this.currentIndex != 0)
            {
                this.currentIndex--;
                this.changeTapes();
                this.currentTape = this.currentDisplay.length - 1;
            }
        }
        else
            this.currentTape--;

        this.activate();
    }

    left()
    {
        if (this.currentIndex != 0)
        {
            this.currentIndex--;
            this.changeTapes();
            this.currentTape = 0;
        }

        this.activate();
    }
    right()
    {
        if (this.currentIndex != this.indices)
        {
            this.currentIndex++;
            this.changeTapes();
            this.currentTape = 0;
        }

        this.activate();
    }

    activate()
    {
        for (let i = 0; i < this.currentDisplay.length; i++)
        {
            this.currentDisplay[i].style.backgroundColor = "";
        }
        this.currentDisplay[this.currentTape].style.backgroundColor = "black";

        for (let i = 0; i < this.index.children.length; i++)
        {
            this.index.children[i].style.backgroundColor = "";
        }

        this.index.children[this.currentIndex].style.backgroundColor = "black";
    }
}