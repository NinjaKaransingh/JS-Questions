//We can check largest number value in an array by js methods

const arr = new Array(25,306,56,99,1991,222)

function largestNum(arr){
    return Math.max(...arr)
}

console.log(largestNum(arr))

//by using for loop

function largestNum(arr){
    let largest = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

const largeVal = largestNum(arr);

console.log(largeVal)