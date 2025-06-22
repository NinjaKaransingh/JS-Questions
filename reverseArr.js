// i/p [5,6,7,8] o/p [8,7,6,5]

function reverseArray(arr) {
    for(let i=0;i<arr.length/2;i++){
        let temp = arr[i];
        arr[i] = arr[arr.length -1 -i];
        arr[arr.length -1 -i] =  temp;
    }
    return arr;
}

console.log(reverseArray([5, 6, 7, 8])); // Output: [8, 7, 6, 5]

function reverseArray(arr) {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.push(arr[arr.length -1 -i]);
    }
    return reversed;
}

console.log(reverseArray([5, 6, 7, 8])); // Output: [8, 7, 6, 5]
