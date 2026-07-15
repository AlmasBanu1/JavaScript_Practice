let passwordCharacters = ["A", "h", "2", "^"];
console.log("Before Swapping:");
console.log(passwordCharacters);

let temp = passwordCharacters[0];
passwordCharacters[0] = passwordCharacters[3];
passwordCharacters[3] = temp;
console.log("After Swapping:");
console.log(passwordCharacters);