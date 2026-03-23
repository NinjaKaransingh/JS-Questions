function secondLargestNumber(arr) {
  let largestNum = -Infinity;
  let secondLargestNum = -Infinity;

  for (const num of arr) {
    if (num > largestNum) {
      secondLargestNum = largestNum;
      largestNum = num;
    } else if (num > secondLargestNum && num !== largestNum) {
      secondLargestNum = num;
    }
  }
  return secondLargestNum === -Infinity ? null : secondLargestNum;
}

const arr = [1, 2, 4, 6, 3, 2, 5, 7];
console.log(secondLargestNumber(arr));
