// i/p - [1,2,2,3,4,4] → o/p - [1,2,3,4]

const removeDuplicateValusingBuiltInMethod = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicateValusingBuiltInMethod([1, 2, 2, 3, 4, 4])); //[1,2,3,4]

const removeDuplicateVal = (arr) => {
  let arr1 = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr1.includes(arr[i])) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
};

console.log(removeDuplicateVal([1, 2, 2, 3, 4, 4]));

const removeDuplicates = (arr) => {
  const seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
