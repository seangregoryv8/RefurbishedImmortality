export default class Finale
{
    lines = 
    [
        {
            line: "...",
            time: 2500
        },
        {
            line: "...the pain...",
            time: 2600
        },
        {
            line: "it's been so long since I've felt happy...",
            time: 4000
        }
    ]
    constructor()
    {
        this.currentLine = 0;
    }
    getTrue()
    {
        return document.getElementById("image").style.visibility == 'visible';
    }
    increment()
    {

    }
}