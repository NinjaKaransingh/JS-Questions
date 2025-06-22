function nonRepeatativeChar(str = "aakash") {
  // Initialize two sets: one for seen characters and one for repeated characters
  const seen = new Set();
  const repeated = new Set();

  // Track characters: first in 'seen', if repeated, move to 'repeated'
  for (let char of str) {
    if (seen.has(char)) {
      repeated.add(char);
    } else {
      seen.add(char);
    }
  }
  for (let char of str) {
    if (!repeated.has(char)) {
      return char;
    }
  }

  //   // Find the first character that is in 'seen' but not in 'repeated'
  //   for (let char of str) {
  //     if (!repeated.has(char)) {
  //       return char;
  //     }
  //   }

  return "not having any repeatative characters";
}

console.log(nonRepeatativeChar()); // Output: 'k'

//aakash -> k

function nonRepeatativeStr(str = "aaash") {
  let str1 = "";
  let val = new Set();
  for (let i = 0; i < str.length; i++) {
    if (str1.includes(str[i])) {
      val.add(str[i]);
    } else {
      str1 += str[i];
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (!val.has(str[i])) {
      return str[i];
    }
  }
  return "not having any repeatative characters";
}
console.log(nonRepeatativeStr()); // Output: 'akash'
