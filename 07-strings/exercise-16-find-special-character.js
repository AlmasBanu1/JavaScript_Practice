let password = "Secure@123";
for (let i = 0; i < password.length; i++){
    if(
        !(password[i] >= 'A' && password[i] <= 'Z') &&
        !(password[i] >= 'a' && password[i] <= 'z') &&
        !(password[i] >= '0' && password[i] <= '9')
    ){
    console.log("Special Character Found");
    }
}