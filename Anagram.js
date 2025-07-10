let str1 = "listen", str2 = "silent";

function areAnagram(str1, str2) {
    let count1 = {};
    let count2 = {};

    // Count frequency of each character in str1
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        count1[char] = (count1[char] || 0) + 1;
    }

    // Count frequency of each character in str2
    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];
        count2[char] = (count2[char] || 0) + 1;
    }
    
    for (let char in count1) {
        if (count1[char] !== count2[char]) {
            return "not anagram";
        }
    }
    return true;
}

console.log(areAnagram(str1,str2));


function sumArray(...arr) {
    console.log(arr);
    const flattened = arr.flat(2)
    console.log(flattened);
    return flattened.reduce((prev,curr)=>prev + curr,0)
}

console.log(sumArray([1,2,3],[[4,5],6]));

const nums = [1,2,3];
const nums2 = [4,5,6,7];

const finalNums = [].concat(nums,nums2)
console.log(finalNums);

console.log(["apple","banana","cherry"].slice(1,2))
console.log(["apple","banana","cherry","orange"].splice(0,2,"dates","grapes"))

const arr =[1,2,3,[4,5],[[6,7],8]]

const flattenedArr = arr.flat(2);
console.log(flattenedArr);

const unsorted = [5,2,10,7,3,1];
const sorted = unsorted.sort((a,b)=>a-b)
console.log(sorted, unsorted)