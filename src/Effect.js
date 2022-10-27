import Controls from "./enums/Controls.js";

export default class Effect
{
    constructor()
    {
        this.activeEffect = false;
    }

    roll(ctl = Controls.Play)
    {
        // Make a roller for different effects that could happen
        switch (ctl)
        {
            case Controls.Stop:
                Math.random(0, 30)
        }
    }
}