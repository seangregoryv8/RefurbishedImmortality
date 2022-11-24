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
        console.log(tape)
        for (let key in tapes)
        {
            if (tape == key)
            {
                tapes[key] = true;
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