/*
    Problem: Flipping an Image (https://leetcode.com/problems/flipping-an-image/)
*/

var flipAndInvertImage = function (image) {
  let start, end

  for (let i = 0; i < image.length; i++) {
    start = 0
    end = image[0].length - 1

    while (start <= end) {
      let temp = image[i][start]
      image[i][start++] = image[i][end] === 0 ? 1 : 0
      image[i][end--] = temp === 0 ? 1 : 0
    }
  }

  return image
}
