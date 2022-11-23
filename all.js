let ins = document.getElementById("instructions_img");
let instructions_state;
const min_start = 0;
const min_end = -900;

document.addEventListener('keydown', event => 
{
    switch (event.key)
    {
        case "x":
        case "X":
            let ran = Math.floor(Math.random() * (10 - 1) + 1);
            console.log(ran);
            if (ran == 9)
            {
                var audio = new Audio();
                audio.src = "../resources/amongus.mp3";
                audio.play();
            }
            changeInstructions(instructions_state);
            break;
    }
})

function changeInstructions(state)
{
    switch (state)
    {
        case "on":
            instructions_state = "off";
            ins.style.animation = "putAway 0.3s ease-in";
            ins.style.bottom = min_end + 'px';
            break;
        case "off":
            instructions_state = "on";
            ins.style.animation = "takeOut 0.3s ease-out"
            ins.style.bottom = min_start + 'px';
            break;
    }
}

instructions_state = "off";
ins.style.bottom = -900 + 'px';