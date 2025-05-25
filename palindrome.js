function palindrome(str){
    return str.split("").reverse().join("");
}
let val = "racecar"
const palindromeVal = palindrome(val);
if(palindromeVal === val ){
   console.log(`${val} : is palindrome`)
}
else{
    console.log(`${val} : is not palindrome`)
}

//by using for loop

function isPalindrome(str){
    // for(let i=0;i<str.length;i++){ 
    for(let i=0;i<str.length/2;i++){ //actually we can check only the half string no need to check full length string value
        if(str[i]!==str[str.length-1-i]){
            return false;
        }
    }
    return true;
}

const palindromeValue = isPalindrome(val);
if(palindromeValue){
    console.log(`${val} : is palindrome`);
}
else{
    console.log(`${val} : is not palindrome`)
}