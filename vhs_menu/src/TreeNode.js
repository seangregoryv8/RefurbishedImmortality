import { MAIN } from "./globals.js";
import LinkList from "./LinkList.js";

export default class TreeNode
{
    constructor(element = null)
    {
        this.root = (element != null);
        this.element = (element == null) ? MAIN : element;
        this.branches = new LinkList();
    }
    
    // Assume Ill be getting it in 
    add(element, parent = null)
    {
        if (parent == null)
        {
            parent = this;
        }
        else
        {
            let exists = this.find(parent, this);
            if (exists != null)
                parent = exists;
        }
        let node = new TreeNode(element);
        
        let exists = this.find(element, parent);
        
        if (exists == null)
            parent.branches.add(node);
    }
    find(element, node)
    {
        if (node.element == element)
        {
            console.log("FOUND")
            return node;
        }

        if (node.branches.isEmpty())
        {
            if (node.next)
            {
                return this.find(element, node.next);
            }
            else
            {
                return;
            }
        }
        else
        {
            return this.find(element, node.branches.getFirst())
        }
        // Step 2: If the element does, go to that descendant starting on the left

        // Step 3: If the element doesn't have any descendants, go to the next (right) element

        // Step 4: We're checking for the element of the ListNode, as that is what's gonna be the 
        // actual treenode itself
    }
    remove(element)
    {

    }
}