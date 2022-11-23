let tv = document.getElementById("tv");
let tv_state;

document.addEventListener('keydown', event => 
{
    switch (event.key)
    {
        case " ":
            changeTV(tv_state);
            break;
        case "Enter":
            if (tv_state == "on")
                document.location.href = "../vhs_menu/menu.html";
    }
})

function changeTV(state)
{
    switch (state)
    {
        case "on":
            tv_state = "off";
            tv.src = "./tv_off.png";
            break;
        case "off":
            tv_state = "on";
            tv.src = "./tv_on.png";
            break;
    }
}

changeTV("on")