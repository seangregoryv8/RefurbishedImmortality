
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