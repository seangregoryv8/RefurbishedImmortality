import LinkList from "./LinkList.js";

export default class TreeNode
{
    constructor()
    {
        this.root = true;
        this.element = "*";
        this.branches = new LinkList();
    }
    constructor(element, file)
    {
        this.root = false;
        this.element = element;
        this.branches = new LinkList();
    }
    
    add(element, parent = "*")
    {
        
    }
    find(element)
    {
        
    }
    remove(element)
    {

    }
}