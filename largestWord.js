let str = "GeeksForGeeks is greatwebsitetolearn";

function largestWord(str) {
    let words = str.split(" ");
    let largeWord = words[0];
    for (let i = 0; i < words.length; i++) {
        if(largeWord.length < words[i].length){
            largeWord = words[i];
        }
    }
    return largeWord; 
}

console.log(largestWord(str)); // Output: "greatwebsitetolearn"

// Alternative approach using reduce
function largestWordReduce(str) {
    return str.split(" ").reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

