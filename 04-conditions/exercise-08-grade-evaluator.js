let marks = 82;
if (marks >= 90){
    console.log("Grade : A");
}else if (marks >= 75){
    console.log("Grade : B");
}else if (marks >= 50){
    console.log("Grade : C");
}else{
    console.log("Fail");
}



// mini challenge
let passwordLength = 10;
let hasUppercase = true;
let hasNumber = true;
if (passwordLength >= 8 && hasUppercase && hasNumber ){
    console.log("Strong Password");
}else{
    console.log("Weak Password");
}

// mentor prediction challenge

let age = 20;
if (age >= 18){
    console.log("Adult");
}else if(age >= 13){
    console.log("Teenager")
}else{
    console.log("Child");
}