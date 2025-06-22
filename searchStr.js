function searchStr(str1, str2) {
    if(str1.toLowerCase().includes(str2.toLowerCase())){
        return true;
    }
    return false;
}

console.log(searchStr("hello world", "World")); // true
console.log(searchStr("hello world", "earth")); // false