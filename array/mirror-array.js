// Mirror Array
// Given an integer array, transform that array into a mirror.

// Examples
// mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

// mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

// mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

// var x = [0,2,4,6]
// const mirror = arr => arr.concat(arr.slice(0, -1).reverse());

// document.write(mirror)
var a = [3,5,6,7,8]
var b = [3,5,6,7,8]

var c = b.slice(0,-1)
var d = c.reverse()
var e = a.concat(d)
document.write(e)