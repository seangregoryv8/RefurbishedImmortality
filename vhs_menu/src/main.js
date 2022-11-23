import
{
    effect,
    tapes
} from "./globals.js";

// Get the ul
// Run the php script
// Get everything in the array it returns
// Formulate it to make the li's for each iteration
// Reformat so \ appears as /

effect.rollStatic();

document.addEventListener('keydown', event => 
{
    switch (event.key)
    {
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
            document.location.href = tapes.getTape().getElementsByTagName("a")[0].href + "?chosenTape=" + tapes.getTape().id;
            break;
        case "Backspace":
            document.getElementById("topbar").style.animation = "topOut 1.2s ease-out";
            document.getElementById("bottombar").style.animation = "bottomOut 1.2s ease-out";
            
            document.getElementById("topbar").style.top = 0;
            document.getElementById("bottombar").style.bottom = 0;
            document.addEventListener("animationend", function() 
            {
                document.location.href = "../vhs/tv.html";
            })
            break;
    }
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