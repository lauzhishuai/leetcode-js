/*在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  // 根据数组的特点
  let n = matrix.length
  let m = matrix[0]?.length ?? undefined // 一维数组情况
  if (!m) {
    return matrix.indexOf(target) > -1
  } else {
    let row = 0,
      col = m - 1
    while (row < n && col >= 0) {
      if (matrix[row][col] > target) {
        col--
        continue
      }
      if (matrix[row][col] < target) {
        row++
        continue
      }
      if (matrix[row][col] == target) {
        return true
      }
    }
    return false
  }
}


// 思想：借助这个二维数组的特点，先取右上角的一个值item，如果item>target,则row-1，如果item< target,则col+1，知道row、col超过数组的边界值。