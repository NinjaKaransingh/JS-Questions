function sumArray(arr) {
  let result = 0;
  for (const element of arr) {
    result += element;
  }
  //   for (let i = 0; i < arr.length; i++) {
  //     result += arr[i];
  //   }
  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumArray(arr));
//using reduce method

const sumArrray = (arr) => {
  return arr.reduce((acc, cum) => acc + cum);
};
console.log(sumArray(arr));
