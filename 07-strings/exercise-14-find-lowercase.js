let password = "Secure123";

for (let i = 0; i < password.length; i++) {
    if (password[i] >= 'a' && password[i] <= 'z') {
        console.log("Lowercase Found");
    }
}