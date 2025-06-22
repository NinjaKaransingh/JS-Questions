function capitalizeFirstLetter(str) {
    let words = str.split(" "); //["hello", "world"]
    for(let i=0;i<words.length;i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    console.log(words); // ["Hello", "world"]
    return typeof words; // "Hello World"
}

console.log(capitalizeFirstLetter("hello world")); // Output: "Hello world"

