function power(num, pow) {
    return num ** pow;
}

function powerNum(num, pow) {
     if(pow < 0) return "Power should be a non-negative integer";
     let result = 1;
     for (let i = 0; i < pow; i++) {
        result *= num;
     }
     return result;
}

console.log(power(2, 3)); // Output: 8
console.log(powerNum(8, 0)); // Output: 1