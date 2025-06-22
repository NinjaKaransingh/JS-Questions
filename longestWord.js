function longestWord(str) {
    let words = str.split(" ");
    let longest = "";
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("The quick brown fox jumps over the lazy dog")); // Output: "quick"