import ListNode from "./ListNode.js";

export default class LinkList
{
    constructor(head = null)
    {
        this.head = head;
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

        let node = this.head
        // Step 2: Remove node from previous
        if (this.head.prev)
        {
            this.head = new ListNode(node.prev.element, node.next, node.prev.prev)
        }
        else if (this.head.next)
        {
            console.log("HI")
            // Step 3: Remove node from next
            this.head = new ListNode(node.next.element, node.next.next, node.prev)
        }
        else
        {
            this.clear();
        }
    }
}