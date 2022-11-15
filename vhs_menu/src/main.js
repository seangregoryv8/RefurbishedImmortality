import
{
    effect,
    tapes
} from "./globals.js";
import LinkList from "./LinkList.js";
import ListNode from "./ListNode.js";
import TreeNode from "./TreeNode.js";

effect.rollStatic();

for (let i = 0; i < tapes.getTapeLength(); i++)
{
    let id = tapes.allTapes[i].id;
    let a = tapes.allTapes[i].getElementsByTagName("a")[0]

    a.href = "../vhs_video/video.html";

    //tapes.allTapes[i].href
    if (i % 2 == 0 && i != 0)
    {
        tapes.adjustIndex();
        tapes.makeIndex();
    }
}

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
            document.location.href = tapes.allTapes[tapes.currentTape].getElementsByTagName("a")[0].href + "?chosenTape=" + tapes.allTapes[tapes.currentTape].id
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