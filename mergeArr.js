function mergeArr(arr1,arr2) {
    return [...arr1,...arr2].sort((a,b) => a-b);
}

function mergeArrDescending(arr1, arr2) {
    console.log(new Set([...arr1, ...arr2]))
    console.log([...new Set([...arr1, ...arr2])])
    return [...new Set([...arr1, ...arr2])].sort((a, b) => b - a);
}

console.log(mergeArr([1,3,8],[3,5,6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrDescending([1, 3, 8], [3, 5, 6])); // [8, 6, 5, 3, 3, 1]    
