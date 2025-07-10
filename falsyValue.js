function falsyValue(arr) {
    let remove = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]){
            remove.push(arr[i]);
        }
    }
    return remove;
}

console.log(falsyValue([0, 5, false, 6, '', 7,'',false]));
