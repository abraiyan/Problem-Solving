/*
    Problem: Average Salary Excluding the Minimum and Maximum Salary (https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)
  
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var average = function (salary) {
  let total = salary[0]
  let min = salary[0]
  let max = salary[0]

  for (let i = 1; i < salary.length; i++) {
    total += salary[i]
    if (min > salary[i]) min = salary[i]
    if (max < salary[i]) max = salary[i]
  }

  return (total - max - min) / (salary.length - 2)
}
