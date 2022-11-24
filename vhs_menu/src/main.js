import
{
    BODY,
    effect,
    tapes
} from "./globals.js";
import
{
    instructions_state,
    changeInstructions,
    finale,
    sound
} from "../../src/all.js";
import Sounds from "../../src/enums/Sounds.js";

effect.rollStatic();
changeInstructions(localStorage.getItem("instructions"))

window.onload = function()
{
    if (localStorage.getItem("finaleTapes") != null)
        finale.tapes = JSON.parse(localStorage.getItem("finaleTapes"))
    if (localStorage.getItem('previousTape') != null)
    {
        finale.checkForFinale(localStorage.getItem('previousTape'))
    }

    if (localStorage.getItem('state') == 'finale')
    {
        BODY.style.backgroundColor = "#12266d";
        document.getElementById("title").innerHTML = "H E L P M E";
        let amountOfTrue = Object.values(finale.tapes).reduce((a, item) => a + item, 0);
        effect.createGlitches(amountOfTrue * 5);
        effect.none();
        effect.createStatic(amountOfTrue);
    }
}
window.onbeforeunload = function()
{
    localStorage.setItem("finaleTapes", JSON.stringify(finale.tapes))
}

//if (localStorage.getItem('previousTape'))

// Get the ul
// Run the php script
// Get everything in the array it returns
// Formulate it to make the li's for each iteration
// Reformat so \ appears as /

let keyDown = false;

document.addEventListener('keydown', event => 
{
    if (!keyDown)
    {
        keyDown = true;
        switch (event.key)
        {
            case "l":
                localStorage.setItem('state', ((localStorage.getItem('state') == 'finale') ? 'regular' : 'finale'));
                document.location.reload();
            case "ArrowUp":
                sound.play(Sounds.Select);
                tapes.up();
                break;
            case "ArrowDown":
                sound.play(Sounds.Select);
                tapes.down();
                break;
            case "ArrowLeft":
                sound.play(Sounds.Select);
                tapes.left();
                break;
            case "ArrowRight":
                sound.play(Sounds.Select);
                tapes.right();
                break;
            case " ":
            case "Enter":
                localStorage.setItem("instructions", instructions_state);
                document.location.href = tapes.getTape().getElementsByTagName("a")[0].href + "?chosenTape=" + tapes.getTape().id;
                break;
            case "Backspace":
                document.getElementById("topbar").style.animation = "topOut 1.2s ease-out";
                document.getElementById("bottombar").style.animation = "bottomOut 1.2s ease-out";
                
                document.getElementById("topbar").style.top = 0;
                document.getElementById("bottombar").style.bottom = 0;
                document.addEventListener("animationend", function() 
                {
                    localStorage.setItem("instructions", instructions_state);
                    document.location.href = "../vhs/tv.html";
                })
                break;
        }
    }
})

document.addEventListener('keyup', () => 
{
    keyDown = false;
})
/*
fetch("../resources/config.json")
.then((response) => response.json())
.then((response) => 
{
    console.log(response);
    const 
    {
        tapes: tapes
    } = response;

    this.allTapes = tapes;
    console.log(this.allTapes);
})

*/
/*
let node = new LinkList();
node.add("first")
node.add("second")
node.add("third")
node.add("fourth", 3)
node.remove("first");

node.remove();

node.setByElement("second", "fifth")

node.setByIndex(2, "second")
*/

//let tree = new TreeNode();
///console.log(tree);

//tree.add("file1")
//tree.add("file2")