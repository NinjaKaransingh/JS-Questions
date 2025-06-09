function factorialNumber(num) {
    if(num < 0) return "Input should be a non-negative integer";
    if(num === 0) return 1;
    let val = 1;
    for (let i = num; i >= 1; i--) {
        val = val * i;
    }
    return val;
}

console.log(factorialNumber(7)); // Output: 5040
