import Sounds from "./enums/Sounds.js"

export default class Sound
{
    constructor()
    {
        this.audio = new Audio();
        this.audio.preload = "auto";

        document.addEventListener('DOMContentLoaded', () => 
        {
            this.audio.load();
        });
    }

    /**
     * 
     * @param {Sounds} sound 
     */
    play(sound)
    {
        this.audio.src = sound;
        this.audio.cloneNode().play();
    }
}