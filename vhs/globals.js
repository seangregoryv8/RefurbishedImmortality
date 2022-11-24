export let BLUE = document.getElementById('blue');

export function fadeInBlue()
{
    BLUE.style.backgroundColor = 'black';
    BLUE.style.animation = 'fadeIn 0.6s linear';
    BLUE.addEventListener('animationend', function() 
    {
        BLUE.style.backgroundColor = '#1e3aa4';
    })
}
export function fadeOutBlue()
{
    BLUE.style.animation = "fadeOut 0.8s ease-in";
    BLUE.addEventListener('animationend', function() 
    {
        BLUE.style.opacity = 1;
    })
}