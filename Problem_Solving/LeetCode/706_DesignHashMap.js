/*
    Problem: Design HashMap (https://leetcode.com/problems/design-hashmap/)

    < Read from the link
*/

/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.data = {}
}

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.data[key.toString()] = value
}

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  if (this.data.hasOwnProperty(key.toString())) {
    return this.data[key.toString()]
  } else {
    return -1
  }
}

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.data[key.toString()]
}
