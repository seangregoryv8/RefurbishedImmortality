import TapeState from "./enums/TapeState.js"

export default class StateMachine
{
    constructor()
    {
        if (localStorage.getItem('state') == null)
            this.state = TapeState.Regular;
        else
            this.state = localStorage.getItem('state');
    }

    get()
    {
        this.state = localStorage.getItem("state");
        return this.state;
    }
    /**
     * 
     * @param {TapeState} state 
     */
    set(state)
    {
        this.state = state;
        localStorage.setItem("state", this.state)
    }

    /**
     * 
     * @param {TapeState} state 
     * @returns 
     */
    check(state)
    {
        this.get();
        return this.state == state
    }

    /**
     * 
     * @param {Array} states 
     */
    checkOr(states)
    {
        for (let i = 0; i < states.length; i++)
        {
            if (this.get() == states[i])
            {
                return true;
            }
        }
        return false;
    }
    
    /**
     * 
     * @param {Array} states 
     */
    checkAnd(states)
    {
        for (let i = 0; i < states.length; i++)
        {
            if (this.get() != states[i])
            {
               return false;
            }
        }
        return true;
    }
}