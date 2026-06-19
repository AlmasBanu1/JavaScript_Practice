function passwordStrength(length){
    if(length >= 12){
        return("Strong");
    } else if(length >= 8){
        return("Medium");              
    }
    return("Weak");
}
console.log(passwordStrength(15));