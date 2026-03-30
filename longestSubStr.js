// Input:  "abcabcbb"
// Output: 3
// Explanation: "abc"

// Implementation of the code is not correct -  need to correct this

function longestSubStrWithoutRepeatingChar(str) {
  let set = new Set();

  let left = 0;
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    while (set.has(str[i])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[i]);
    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
}

console.log(longestSubStrWithoutRepeatingChar("abcabcbb")); // 3
console.log(longestSubStrWithoutRepeatingChar("bbbbb")); // 1
console.log(longestSubStrWithoutRepeatingChar("pwwkew")); // 3
