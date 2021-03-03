/*
    Problem: 690. Employee Importance (https://leetcode.com/problems/employee-importance/)

    < Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
    < Output: 11
    < Explanation: Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3. They both have importance value 3. So the total importance value of employee 1 is 5 + 3 + 3 = 11.      


    # Use: Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const map = new Map()

  for (let i = 0; i < employees.length; i++) {
    let currentEmpployee = employees[i]
    map.set(currentEmpployee.id, {
      imp: currentEmpployee.importance,
      sub: currentEmpployee.subordinates,
    })
  }

  let totalImportance = total(map.get(id), map)

  return totalImportance
}

var total = function (employee, map) {
  let ans = employee['imp']
  for (let i = 0; i < employee['sub'].length; i++) {
    ans += total(map.get(employee['sub'][i]), map)
  }
  return ans
}
