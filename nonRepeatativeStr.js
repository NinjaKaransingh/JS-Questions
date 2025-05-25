let str = "aakash";

function nonRepeatativeStr(str) {
    let str1 = ''; 
    let val = new Set();
     
    for (let i = 0; i < str.length; i++) {
        if (str1.includes(str[i])) {
            val.add(str[i]);
        } else {
            str1 += str[i];
        }
    }

    for (let i = 0; i < str1.length; i++) {
        if (!val.has(str1[i])) {
        return str1[i]; 
        }
    }
    return str;
}

console.log(nonRepeatativeStr(str)); // Output: "ka"


// users = new Set();
// users.add({ name: "Alice" });
// users.add({ name: "Bob" });
// console.log(users); // Contains unique objects


const users = new Map();
users.set("Alice", { age: 25 });
users.set("Bob", { age: 30 });
console.log(users.get("Alice")); // Contains unique keys with associated values // { age: 25 }
console.log(users.get("Alice").age); // 25