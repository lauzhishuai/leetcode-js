/*给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/ */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let rk = -1 // 右侧的指针，代表滑动窗口当前滑动的位置，-1代表还没有滑动
  let num =0
  let arr = new Set()
  let n = s.length
  // 滑动窗口
  for(let i =0 ;i < n; i++) { // 遍历以每个字符开头的子串
      if(i !==0) {
          // 做指针右移一位
          arr.delete(s[i-1])
      }
      while(rk+1 <n && !arr.has(s[rk+1])) {
          arr.add(s[rk+1])
          rk++
      }
      num = Math.max(num,rk-i+1)
  }
  return num
};