function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //
  }

  return sum;
  // return arr.reduce((a, b) => a + b, 0);
}

console.log(sum([2, 7, 11, 15]));
