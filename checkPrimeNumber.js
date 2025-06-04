function isPrimeNumber(num) {
    if(num<2) return false;
    for (let i = 2; i < num; i++) {
        if(num % 2 === 0){
            return false;
        }      
    }
    return true;
}

let number = 29;
console.log(isPrimeNumber(number)); // true
console.log(isPrimeNumber(28)); // false

//using reduce method