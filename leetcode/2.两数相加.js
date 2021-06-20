/*给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let head= null,tail= null,f =0
  while(l1||l2) {
      const n = l1? l1.val:0
      const m = l2? l2.val:0
      const sum = n + m +f
      f = Math.floor(sum/10)
      // 当点节点的值sum % 10
      if(!head) {
          head = tail = new ListNode(sum%10)
      }else {
          tail = tail.next = new ListNode(sum%10)
      }
          l1 = l1? l1.next:null
          l2= l2? l2.next:null
  }
  if(f>0) {
      tail = tail.next = new ListNode(f)
  }
  return head
};