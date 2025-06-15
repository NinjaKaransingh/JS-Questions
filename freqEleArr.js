let arr = [1,1,3,2,4,5,3,5,6,8,9,6,8,10,10,1];

function freqArr(arr) {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        
        if(freq[arr[i]]){
            freq[arr[i]] +=1;
        }
        else{
            debugger
            freq[arr[i]] = 1;
        }
    }
    return freq;
}

console.log(freqArr(arr));
// Output: { '1': 3, '2': 1, '3': 2, '4': 1, '5': 2, '6': 2, '8': 2, '9': 1, '10': 2 }
// Using reduce method
const freqEleArr = (arr) => {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}; 

console.log(freqEleArr(arr));

