function unionArray(arr1,arr2) {
    return [...new Set([...arr1, ...arr2])]
}

console.log(unionArray([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
console.log(unionArray([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]   
