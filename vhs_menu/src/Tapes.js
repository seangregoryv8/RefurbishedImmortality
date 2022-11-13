export default class Tapes
{
    constructor(tapes)
    {
        this.allTapes = tapes;
        this.currentTape = 0;
        this.index = document.getElementById("tapeIndex")
        this.indices = 1;
        this.currentIndex = 0;
        this.makeIndex();
        this.activate();
        
        this.maxTapesPerPage = 2;
    }

    changeTapes()
    {

    }

    makeIndex()
    {
        let li = document.createElement('li');
        li.innerHTML = this.indices;
        this.index.appendChild(li);
    }

    adjustIndex()
    {
        this.indices++;
    }

    getTapeLength()
    {
        return this.allTapes.length;
    }

    getCurrentTape()
    {
        return this.allTapes[this.currentTape];
    }

    getCurrentIndex()
    {
        return this.currentIndex;
    }

    down()
    {
        if (this.currentTape == this.allTapes.length - 1)
        {
            this.currentTape = 0;
        }
        else
            this.currentTape++;

        this.activate();
    }
    up()
    {
        if (this.currentTape == 0)
        {
            this.currentTape = this.allTapes.length - 1;
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
        }

        this.activate();
    }
    right()
    {
        if (this.currentIndex != this.indices - 1)
        {
            this.currentIndex++;
        }

        this.activate();
    }

    activate()
    {
        for (let i = 0; i < this.allTapes.length; i++)
        {
            this.allTapes[i].style.backgroundColor = "";
        }
        this.allTapes[this.currentTape].style.backgroundColor = "black";

        for (let i = 0; i < this.index.children.length; i++)
        {
            this.index.children[i].style.backgroundColor = "";
        }

        this.index.children[this.currentIndex].style.backgroundColor = "black";
    }
}