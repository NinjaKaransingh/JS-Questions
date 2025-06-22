function minNum(arr) {
    let min = arr[0];
    for(let i=1;i<arr.length;i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

function minNum(arr) {
    return Math.min(...arr);
}

function maxNum(arr) {
    let max = arr[0];
    for(let i= 0;i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}

function maxNum(arr) {
    return Math.max(...arr);
}

console.log(maxNum([5, 3, 8, 1, 2])); // 8
console.log(minNum([5, 3, 8, 1, 2])); // 1