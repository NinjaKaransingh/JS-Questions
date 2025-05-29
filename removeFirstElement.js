//using Array.from() method
// We can remove the first element of an array using the `shift()` method in JavaScript.
// The `shift()` method removes the first element from an array and returns that removed element. and the length of the array is decreased by one.
// Using Array.from() method to create an array and then removing the first element using shift() method

function removeFirstElementr(arr) {
  return arr.shift();
}
// let arr = Array.from([10, 20, 30, 40, 50]);
let arr = new Array(10, 20, 30, 40, 50);
console.log(removeFirstElementr(arr)); // 10
console.log(arr); // [20, 30, 40, 50]

//using slice() /**
let arr1 = arr;

function removeFirstElementr1(arr) {
  return arr.slice(1, 2); //[30]
}

console.log(removeFirstElementr1(arr1));
