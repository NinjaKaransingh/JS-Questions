function toUpperCase(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;

    // return arr.map(char => char.toUpperCase());
}

let arr = ['g','f','g']
console.log(toUpperCase(arr)); // Output: ['G', 'F', 'G']


function toUpperCase(arr){
    for (let i = 0; i < arr.length; i++) {
        let charCode = arr[i].charCodeAt();
        if(charCode >= 97 && charCode <= 122) arr[i] = String.fromCharCode(charCode - 32);
        // String.fromCharCode() -> takes the numbers and returns the corresponding characters
    }
    return arr;
}