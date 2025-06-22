let str = "GeeksForGeeks";
let subStr = "For";
function containsSubString(str, subStr) {
    return str.includes(subStr);
}

console.log(containsSubString(str, subStr));
console.log(containsSubString(str, "for"));

function containsSubString(str, subStr) {
    if(subStr.length === 0) return true; // Empty substring is always contained
    for (let i = 0; i < str.length - subStr.length; i++) {
        let found = true;
        for(let j=0;j<subStr.length;j++){
            if(str[i+j] !== subStr[j]){
                found = false;
                break;
            }
        }
        if(found) return true;
    }
    return false;
}
