// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

function makePair(num1,num2){
    num1 = [1]
    num2 = [2]
    return num1.concat(num2)
}
console.log(makePair())