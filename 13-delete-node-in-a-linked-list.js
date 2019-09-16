/*
  solved on leetcode.com on 16/09/2019
  
  Problem Description:
  Write a function to delete a node (except the tail) in a singly 
  linked list, given only access to that node.

  Given linked list -- head = [4,5,1,9], which looks like following:



  Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
*/
/*
  @param {ListNode} node
  @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    var current = node;
            while(current)
                {
                   current.val = current.next.val;
                    if(!current.next.next)
                    {current.next=null}
                    current=current.next;
                }
            
};