function duplicateNum(arr) {
  let obj = {};
  let arr1 = [];

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (obj[char]) {
      obj[char] += 1;
      if (obj[char] === 2) {
        arr1.push(char);
      }
    } else {
      obj[char] = 1;
    }
  }
  return arr1;
}

console.log(duplicateNum([1, 2, 3, 2, 4, 5, 1])); // [2,1]
