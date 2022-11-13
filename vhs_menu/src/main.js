import
{
    effect,
    tapes
} from "./globals.js";
import LinkList from "./LinkList.js";
import ListNode from "./ListNode.js";

effect.rollStatic();

for (let i = 0; i < tapes.getTapeLength(); i++)
{
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
let node = new LinkList();
node.add("first")
node.add("second")
node.add("third")
node.add("fourth", 3)
node.remove("first");

node.remove();

console.log(node)