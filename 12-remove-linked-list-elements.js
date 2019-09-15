/*
  solved on leetcode.com on 15/09/2019
  
  Problem Description:
  Remove all elements from a linked list of integers that have value val.

  Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
/
/*
  @param {ListNode} head
  @param {number} val
  @return {ListNode}
*/
var removeElements = function(head, val) {
    if(head==null){return null;}
    var current = head;
    while(current&&current.next)
        {
            if(current.next.val === val)
                {current.next = current.next.next;}
            else{current = current.next;}
        }
    if(head.val === val){head=head.next}  
    return head
}