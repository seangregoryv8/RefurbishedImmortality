import ListNode from "./ListNode.js";

export default class LinkList
{
    constructor(head = null)
    {
        this.head = head;
    }

    isEmpty()
    {
        return this.head == null;
    }

    /**
     * 
     * @param {number} index 
     * @param {number} count 
     * @param {ListNode} node 
     * @returns {ListNode}
     */
    get(index, count = 0, node = this.head)
    {
        return (count != index - 1) ? this.get(index, count + 1, node.next) : node;
    }

    /**
     * 
     * @param {*} oldElem
     * @param {*} newElem
     * @param {ListNode} node 
     * @returns 
     */
    setByElement(oldElem, newElem, node = this.getFirst())
    {
        if (node == null)
            return;
        
        else if (node.element == oldElem)
        {
            node.element = newElem;
        }
        else
        {
            return this.setByElement(oldElem, newElem, node.next);
        }
    }
    
    /**
     * 
     * @param {number} index
     * @param {*} newElem
     * @param {ListNode} node 
     * @param {number} count
     * @returns 
     */
    setByIndex(index, newElem, node = this.getFirst(), count = 0)
    {
        if (node == null)
            return;
        
        else if (index == count)
        {
            node.element = newElem;
        }
        else
        {
           return this.setByIndex(index, newElem, node.next, count + 1);
        }
    }

    getByElement(element, node = this.getFirst())
    {
        if (!node)
            return null;
        else if (element == node.element)
            return node;
        else
            return this.getByElement(element, node.next)
    }

    /**
     * 
     * @param {ListNode} node 
     * @param {number} count 
     * @returns {number}
     */
    size(node = this.getFirst(), count = 0)
    {
        return (node == null) ? count : this.size(node.next, count + 1);
    }

    /**
     * 
     * @returns {ListNode}
     */
    getFirst(node = this.head)
    {
        return (node.prev == null) ? node : this.getFirst(node.prev);
    }

    /**
     * 
     * @param {ListNode} node 
     * @returns {ListNode}
     */
    getLast(node = this.head)
    {
        return (node.next == null) ? node : this.getLast(node.next);
    }

    clear()
    {
        this.head = null;
    }

    /**
     * 
     * @param {*} element 
     * @param {number} index 
     */
    add(element, index = 0)
    {
        if (this.head == null)
        {
            this.head = new ListNode(element);
        }
        else
        {
            index = this.size()

            //console.log("-------ADD--------")
            let currentNode = this.get(index);
    
            let tempNode = currentNode.next;
            currentNode.next = new ListNode(element, tempNode, currentNode)
        }
        this.head = this.getFirst();
    }

    /**
     * 
     * @param {ListNode} node 
     */
    remove(element = this.getLast().element)
    {
        // Step 1: Find the node
            this.head = this.getByElement(element);

        if (this.head.next != null)
            this.head.next.prev = this.head.prev;

        if (this.head.prev != null)
            this.head.prev.next = this.head.next;
            
        this.head = this.getFirst();
    }
}