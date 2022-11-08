
/*
document.addEventListener('keypress', event => 
{
    console.log("HI")
    event.stopPropagation();
    event.preventDefault();
    return false;
})

    function disableCtrlKeyCombination(e)
    {
        var forbiddenKeys = new Array('a','n','c','x','v','j','w');
        var key;
        var isCtrl
        if (window.event)
        {
            key = window.event.keyCode;
            isCtrl = window.event.ctrlKey;
        }
        else
        {
            key = e.which;
            isCtrl = e.ctrlKey;
        }

        if (isCtrl)
        {
            for (i = 0; i < forbiddenKeys.length; i++)
            {
                if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase())
                {
                    alert(`Key combination CTRL + ${String.fromCharCode(key)} has been disabled`);
                    event.preventDefault();
                    return false
                }
            }
        }
        return true;
    }
function preventReload()
{
    window.onbeforeunload = function() 
    {
        event.stopPropagation();
        event.preventDefault();
        alert("NOOOOOOO")
            //alert(`Key pressed ${name} \r\n Key code value: ${code}`)
        return false;
    }
}

preventReload();*/
/*(function ()
{
    var location = window.document.location;

    var preventNavigation = function () 
    {
        var originalHashValue = location.hash

        window.setTimeout(function ()
        {
            location.hash = 'preventNavigation' + ~~ + (9999 * Math.random());
            location.hash = originalHashValue
        }, 0);
    };

    window.addEventListener('beforeunload', preventNavigation, false)
    window.addEventListener('unload', preventNavigation, false)
})();

window.onbeforeunload = function () {
    alert("Click Submit to close");
    return false;
}*/

// From Timer.js

    /*decrement()
    {
        if (this.seconds == 0 && this.minutes == 0 && this.hours == 0)
            return "STOP";
        
        if (this.seconds != 0)
        {
            this.seconds--;
        }
        else
        {
            this.seconds = 59;
            if (this.minutes != 0)
            {
                this.minutes--;
            }
            else
            {
                if (this.hours != 0)
                {
                    this.hours--;
                }
            }
        }
        return this.getTime();
    }
    increment()
    {
        if (this.hours == 24)
        {
            this.hours = 0;
        }
        else if (this.minutes >= 59)
        {
            this.minutes = 0;
            this.hours++;
        }
        else if (this.seconds >= 59)
        {
            this.seconds = 0;
            this.minutes++;
        }
        else
        {
            this.seconds++;
        }
        return this.getTime();
    }*/

    /*changeTime(time)
    {
        let seconds = parseFloat(time).toFixed(0);
        let minutes = 0;
        while (seconds >= 60)
        {
            minutes++;
            seconds -= 60;
        }
        this.seconds = seconds;
        this.minutes = minutes;
    }

    checkMaxTime()
    {
        if (this.seconds == this.maxSeconds && 
            this.minutes == this.maxMinutes)
            action.delete();
    }*/