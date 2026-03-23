function duplicateArr(arr) {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (count[char]) {
      return true;
    }
    count[char] = 1;    
  }

  return false;
}

console.log(duplicateArr([1, 2, 3, 1])); //true
