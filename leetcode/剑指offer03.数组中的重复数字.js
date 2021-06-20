/*找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

// 这道题和题1.两数求和 思想一样，用map构建一个hash查找表
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  // 查找表：hash表
  let map = new Map()
  for(let i=0; i<nums.length; i++) {
      if(map.get(nums[i]) == undefined) {
          map.set(nums[i],i)
      } else {
          return nums[i]
      }
  }
};