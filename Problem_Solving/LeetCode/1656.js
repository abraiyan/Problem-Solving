/*
    Problem: Design an Ordered Stream (https://leetcode.com/problems/design-an-ordered-stream/)
*/

/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.map = new Map()
  this.pointer = 1
}

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.map.set(idKey, value)
  return this.print()
}

OrderedStream.prototype.print = function () {
  let output = []
  while (this.map.has(this.pointer)) {
    output.push(this.map.get(this.pointer))
    this.pointer++
  }
  return output
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
