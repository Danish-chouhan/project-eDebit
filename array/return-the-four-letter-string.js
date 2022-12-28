// Create a function that takes an array of strings and returns the words that are exactly four letters.

// Examples
// isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]

// isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]

// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]
// Notes
// You can expect valid strings for all test cases.

var a = ["tomato","potato","pair"]
var b = a.filter(word => word.length <5)
document.write(b)