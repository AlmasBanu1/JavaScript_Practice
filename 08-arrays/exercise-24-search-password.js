let passwords = [
    "Google123",
    "Amazon456",
    "GitHub789"
];

let searchPassword = "Facebook123";
let found = false;

for (let i = 0; i < passwords.length; i++) {

    if (passwords[i] === searchPassword) {
        found = true;
    }

}

if (found) {
    console.log("Password Found");
} else {
    console.log("Password Not Found");
}