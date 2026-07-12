function checkPasswordScore(password){
    let hasUppercase = true;
    let hasLowercase = true;
    let hasNumber = false;
    let hasSpecialCharacter = true;
    let score = 0;

    if (password.length >= 8) {
    score += 1;
    }

    if(hasUppercase == true){
        score += 1;
    }

    if(hasLowercase == true){
        score += 1;
    }

    if(hasNumber == true){
        score += 1;
    }

    if(hasSpecialCharacter == true){
        score += 1;
    }
    return score;
    
}
console.log(checkPasswordScore("Secure@123"));