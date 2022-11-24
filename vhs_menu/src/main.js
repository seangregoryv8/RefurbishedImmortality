import
{
    effect,
    tapes
} from "./globals.js";
import { instructions_state, changeInstructions } from "../../all.js";
import { finale } from "../../all.js"

changeInstructions(localStorage.getItem("instructions"))

if (localStorage.getItem('previousTape') != null)
{
    finale.checkForFinale(localStorage.getItem('previousTape'))
}
    
console.log(localStorage.getItem('previousTape'));
console.log(finale.tapes);
//if (localStorage.getItem('previousTape'))

// Get the ul
// Run the php script
// Get everything in the array it returns
// Formulate it to make the li's for each iteration
// Reformat so \ appears as /

effect.rollStatic();

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
                tapes.up();
                break;
            case "ArrowDown":
                tapes.down();
                break;
            case "ArrowLeft":
                tapes.left();
                break;
            case "ArrowRight":
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