// function fibonacciNum(num) {
//     if (num < 0) return "Input should be a non-negative integer";
//     if (num === 0) return 0;
//     if (num === 1) return 1;

//     let fib = [0, 1];
//     for (let i = 2; i <= num; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib[num];
// }


fibonacciNum = (num) => {
    if(num < 0) return "Input should be greater than zero";
    if(num === 0) return 0;
    let num1 = 0, num2 = 1, nextNum;
    for(let i = 0;i< num;i++){
        console.log(num1);   
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
    return num1;
}

console.log(fibonacciNum(5))