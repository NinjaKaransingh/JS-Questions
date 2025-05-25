//using js in-built methods
function reverseStr(str) {
    if(typeof str === "string"){
        return str.split("").reverse().join("")
    }
}

console.log(reverseStr("racecar"));

//using for loops - performance on large string - this approach is better

function reverseStr(str){
    let reversed = '';
    for(i=str.length - 1;i>=0;i--){
        reversed+= str[i];
    }
    return reversed;
}

console.log(reverseStr("racecar1"));



