function countChar(str, char) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i]=== char){
            count +=1;
        }
    }
    return count;
}

console.log(countChar("hello world", "l")); // 3

// Using reduce method
const countCharReduce = (str, char) => {
    console.log(str.split('').length);
    
    return str.split('').reduce((acc, curr) => {
        return curr === char ? acc + 1 : acc;
    }, 0);
};

console.log(countCharReduce("hello world", "l")); // 3
