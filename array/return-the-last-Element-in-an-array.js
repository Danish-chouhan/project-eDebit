// Create a function that accepts an array and returns the last item in the array.

// Examples
// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.


var a = [1,2,3]
var a = ["cat","dog","duck"]
var a = [true,false,true]
function fn(x){
  return a.pop()
}
document.write(fn())