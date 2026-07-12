let password = "Secure@123";
function checkPasswordScore(password) {
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialCharacter = false;
    
    for (let i = 0; i < password.length; i++){
        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUppercase = true;
        }
        if (password[i] >= 'a' && password[i] <= 'z') {
            hasLowercase = true;
        }
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
        }
        if (
            !(password[i] >= 'A' && password[i] <= 'Z') &&
            !(password[i] >= 'a' && password[i] <= 'z') &&
            !(password[i] >= '0' && password[i] <= '9')
        ){
            hasSpecialCharacter = true;
        }
    }

    let score = 0;

    if (password.length >= 8) {
    score += 1;
    }
    if(hasUppercase){
        score += 1;
    }
    if(hasLowercase){
        score += 1;
    }
    if(hasNumber){
        score += 1;
    }
    if(hasSpecialCharacter){
        score += 1;
    }
    return score;
}

let score = checkPasswordScore("Secure@123");

console.log("Score:", score);