/*
    Problem: Design HashSet (https://leetcode.com/problems/design-hashset/)

    < Read from the link
*/

var MyHashSet = function () {
  this.data = {}
  this.size = 0
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (this.contains(key.toString())) return null
  this.data[key.toString()] = key
  this.size++
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (this.contains(key.toString())) {
    delete this.data[key.toString()]
    this.size--
  } else {
    return null
  }
}

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const temp = key.toString()
  return this.data.hasOwnProperty(temp)
}
