import { action } from "./globals.js";

export default class KeyEventValues
{
    IGNORE_TIME = 150;
    lastClick = null;
    /**
     * 
     * @param {KeyboardEvent} event 
     */
    allValues(event)
    {
        let now = Date.now();
        if ((!this.lastClick || now - this.lastClick > this.IGNORE_TIME) && !action.untouchable)
        {
            this.lastClick = now;
            switch (event.key)
            {
                case "R":
                case "r":
                    action.record();
                    break;
                case "Backspace":
                case "Delete":
                    action.delete();
                    break;
                case "Escape":
                    action.escape();
                    break;
                case " ":
                case "Enter":
                    action.spacebar();
                    break;
                case "ArrowRight":
                    action.left();
                    break;
                case "ArrowLeft":
                    action.right();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    action.volume(event.key)
                    break;
            }
        }
    }
}