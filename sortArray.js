const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i]= arr[j];
            arr[j] = temp;
        }
    }
  }
  return arr;
};

function descendingSortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
       for (let j = i+1; j < arr.length; j++) {
        if(arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
       }     
    }
    return arr;
}

// Example usage:
console.log(sortArray([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]         
console.log(descendingSortArray([5, 3, 8, 1, 2])); // [8, 5, 3, 2, 1]