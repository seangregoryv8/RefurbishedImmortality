export default class ListNode
{
    /**
     * 
     * @param {*} element 
     * @param {ListNode} next 
     * @param {ListNode} prev 
     */
    constructor(element, next = null, prev = null)
    {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
}