function reverseArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}

console.log(reverseArray(['g','f','g']));
