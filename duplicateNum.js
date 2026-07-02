function duplicateNum(arr) {
  let map = {};
  let arr1 = [];

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (map[char]) {
      map[char] += 1;
      if (map[char] === 2) {
        arr1.push(char);
      }
    } else {
      map[char] = 1;
    }
  }
  return arr1;
}

console.log(duplicateNum([1, 2, 3, 2, 4, 5, 1])); // [2,1]
