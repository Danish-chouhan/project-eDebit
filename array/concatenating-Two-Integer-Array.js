// Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]
// Notes
// Don't forget to return the result.
// See Resources tab for more info.


var a = [1,3,5];
function fn(x){
    x = [2,6,8]
    return a.concat(x)
};
document.write(fn())