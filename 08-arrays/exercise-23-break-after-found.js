let passwords = [
    "Google123",
    "Amazon456",
    "GitHub789"
];

let target = "Amazon456";
let found = false;

for (let i = 0; i < passwords.length; i++) {

    if (passwords[i] === target) {
        found = true;
        break;
    }

}

console.log(found);