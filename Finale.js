export default class Finale
{
    tapes = 
    {
        eyes: false,
        heart: false,
        brain: false
    };

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
}