import { action } from "./globals.js";

export default class KeyEventValues
{
    IGNORE_TIME = 1000;
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
                case "Tab":
                    this.no(event);
                    break;
                case "Enter":
                    this.no(event);
                    break;
                case "Shift":
                    this.no(event);
                    break;
                case "Control":
                    this.no(event);
                    break;
                case "Alt":
                    this.no(event);
                    break;
                case "CapsLock":
                    this.no(event);
                    break;
                case "Escape":
                    action.escape();
                    break;
                case " ":
                    action.spacebar();
                    break;
                case "PageUp":
                    this.no(event);
                    break;
                case "PageDown":
                    this.no(event);
                    break;
                case "End":
                    this.no(event);
                    break;
                case "Home":
                    this.no(event);
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
                case "PrintScreen":
                    this.no(event);
                    break;
                case "Delete":
                    this.no(event);
                    break;
                case "Meta":
                    this.no(event);
                    break;
                case "ContextMenu":
                    this.no(event);
                    break;
                case "F1":
                    this.no(event);
                    break;
                case "F2":
                    this.no(event);
                    break;
                case "F3":
                    this.no(event);
                    break;
                case "F4":
                    this.no(event);
                    break;
                case "F5":
                    this.no(event);
                    break;
                case "F6":
                    this.no(event);
                    break;
                case "F7":
                    this.no(event);
                    break;
                case "F8":
                    this.no(event);
                    break;
                case "F9":
                    this.no(event);
                    break;
                case "F10":
                    this.no(event);
                    break;
                case "F11":
                    this.no(event);
                    break;
                case "F12":
                    this.no(event);
                    break;
                case "NumLock":
                    this.no(event);
                    break;
                case "ScrollLock":
                    this.no(event);
                    break;
            }
        }
    }
    /**
     * 
     * @param {KeyboardEvent} e 
     */
    no(e)
    {
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo(0, 0);
        return false;
    }
}