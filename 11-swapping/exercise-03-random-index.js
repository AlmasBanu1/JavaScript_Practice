let passwordCharacters = ["A", "h", "2", "^"];

let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
let randomChar = passwordCharacters[randomIndex];

console.log("Array:", passwordCharacters);

console.log("Random Index:",  randomIndex);

console.log("characters:", randomChar);