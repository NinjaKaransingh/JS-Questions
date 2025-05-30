function greet(name, callBack) {
  return callBack(`Hello:${name}`);
}

greet("Karansingh", (e) => {
  console.log(`Hello : ${e}`);
});

//arrow function
const add = (a, b) => a + b;
console.log(add(2.4, 4));

//adding a property to an existing object
const obj = {
  name: "Karansingh",
};
obj.age = 26;
console.log(obj);

//deleting a property from an existing object
delete obj.age;
console.log(obj);

//using Object.assign() to add a property to an existing object
Object.assign(obj, { name: "Karansingh1", age: 26, city: "Gadag" }); //Object.assign(taget, source1, source2, ...);
console.log(obj);

// Using Bracket Notation
obj["country"] = "India";
console.log(obj);

//using destructuring to remove a property from an object
let user = { name: "Alice", age: 25, city: "New York" };
const { age, ...newUser } = user; //using destructuring
console.log(newUser);

// how to achieve repeating a string in JavaScript
console.log("gfg".repeat(3));

function repeat(str, n) {
  str = str.toString();
  let result = "";
  for (i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

console.log(repeat("gfg", 3));

console.log(1 + "2"); // "12" (string concatenation)
console.log(1 + 2 + "3"); // "33" (string concatenation)
console.log("6" - 1); // 5 (string to number conversion)
console.log("6" - "1"); // 5 (string to number conversion)
console.log(1 === "1"); // false (strict equality)
console.log(1 == "1"); // true (loose equality)
console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality)

//event loop, slice(), splice()
