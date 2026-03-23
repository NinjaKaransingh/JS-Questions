// important asked in SAP Labs

// 📥 Example 1
// i/p : nums = [2, 7, 11, 15] - target = 9
// o/p : [0,1]

// 📥 Example 2
// Input: nums = [3, 2, 4] - target = 6
// Output : [1, 2]

// case 1 : If the elements are adjacent elements
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] == target) {
      return [i, i + 1];
    }
  }
  return "not found";
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([1, 5, 3, 7], 8));

// case 2 : If the values can be anywhere
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return "not found";
}

console.log(twoSum([4, 1, 9, 2], 8)); //Output: not found
console.log(twoSum([1, 5, 3, 7], 8)); //Output : [0,3]

// arr = [2, 7, 11, 15], target = 9
function hashMapTwoSum(arr, target) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[arr[i]] = i;
  }

  return "not found";
}
