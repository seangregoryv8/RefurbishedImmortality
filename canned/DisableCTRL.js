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
                return false
            }
        }
    }
    return true;
}