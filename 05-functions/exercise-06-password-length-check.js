function checkPassword(length){
    if(length >= 8){
        return("Strong Password");
    }
    return("Weak Password");
}
console.log(checkPassword(10));