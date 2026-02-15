let string = "Kashyap";
let charCount = {};

for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}

console.log(charCount);
