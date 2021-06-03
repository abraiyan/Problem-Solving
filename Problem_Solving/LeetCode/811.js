/*
    Problem: Subdomain Visit Count (https://leetcode.com/problems/subdomain-visit-count/)
*/

var subdomainVisits = function (cpdomains) {
  let map = new Map()
  let output = []

  for (const word of cpdomains) {
    let data = word.split(' ')
    let domain = data[1].split('.')

    for (let i = 0; i < domain.length; i++) {
      let word = ''
      let j = i
      while (j < domain.length) {
        word += domain[j]
        j++
        if (j !== domain.length) word += '.'
      }
      map.set(
        word,
        map.has(word) ? map.get(word) + parseInt(data[0]) : parseInt(data[0])
      )
    }
  }

  for (const key of map.keys()) {
    output.push(`${map.get(key)} ${key}`)
  }
  return output
}
