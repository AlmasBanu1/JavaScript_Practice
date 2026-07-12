let password = "Secure@123";

function checkPasswordScore(password) {
    let hasUppercase = true;
    let hasLowercase = true;
    let hasNumber = false;
    let hasSpecialCharacter = true;
    let score = 0;

    if (password.length >= 8) {
        score += 1;
    }

    if (hasUppercase) {
        score += 1;
    }

    if (hasLowercase) {
        score += 1;
    }

    if (hasNumber) {
        score += 1;
    }

    if (hasSpecialCharacter) {
        score += 1;
    }

    return score;
}

let score = checkPasswordScore(password);

console.log("Score:", score);

if (score >= 4) {
    console.log("Strong Password");
} else if (score >= 2) {
    console.log("Medium Password");
} else {
    console.log("Weak Password");
}